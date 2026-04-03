import mockBeerMenu from "../data/mockBeerMenu.json";
import type {
  BeerMenuItem,
  BeerMenuSource,
  UntappdContainer,
  UntappdMenuItem,
  UntappdMenuResponse,
  UntappdSection,
} from "../types";

const envSource = import.meta.env.VITE_BEER_MENU_SOURCE;

export function getBeerMenuSource(): BeerMenuSource {
  return envSource === "untappd" ? "untappd" : "mock";
}

export function hasUntappdConfig() {
  return Boolean(
    import.meta.env.VITE_UNTAPPD_EMAIL &&
      import.meta.env.VITE_UNTAPPD_READ_ONLY_TOKEN &&
      import.meta.env.VITE_UNTAPPD_MENU_ID,
  );
}

export function getMockBeerMenu() {
  return mockBeerMenu as BeerMenuItem[];
}

function formatAbv(abv?: string | null) {
  return abv ? `${abv}% ABV` : "ABV TBC";
}

function formatPrice(containers?: UntappdContainer[] | null) {
  const firstWithPrice = containers?.find((container) => container.price);

  if (!firstWithPrice?.price) {
    return "Ask at bar";
  }

  const price = String(firstWithPrice.price);
  return price.startsWith("£") ? price : `£${price}`;
}

function formatDescription(item: UntappdMenuItem, sectionName: string) {
  if (item.description?.trim()) {
    return item.description.trim();
  }

  return `Currently pouring on the ${sectionName} section via Untappd for Business.`;
}

function mapUntappdItems(section: UntappdSection) {
  return section.items.map(
    (item): BeerMenuItem => ({
      id: String(item.id),
      name: item.name ?? "Untitled Pour",
      style: item.style ?? "Beer",
      abv: formatAbv(item.abv),
      brewery: item.brewery ?? "Unknown brewery",
      price: formatPrice(item.containers),
      section: section.name ?? "Untappd Menu",
      description: formatDescription(item, section.name ?? "menu"),
      labelImage: item.label_image_hd ?? item.label_image ?? undefined,
    }),
  );
}

export async function fetchUntappdBeerMenu() {
  const email = import.meta.env.VITE_UNTAPPD_EMAIL;
  const token = import.meta.env.VITE_UNTAPPD_READ_ONLY_TOKEN;
  const menuId = import.meta.env.VITE_UNTAPPD_MENU_ID;

  if (!email || !token || !menuId) {
    throw new Error("Untappd configuration is incomplete.");
  }

  const credentials = btoa(`${email}:${token}`);
  const response = await fetch(`https://business.untappd.com/api/v1/menus/${menuId}?full=true&source_name=PegasusSite`, {
    headers: {
      Authorization: `Basic ${credentials}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Untappd request failed with status ${response.status}.`);
  }

  const data = (await response.json()) as UntappdMenuResponse;
  const sections = [...data.menu.sections];

  if (data.menu.on_deck_section) {
    sections.unshift(data.menu.on_deck_section);
  }

  return sections.flatMap(mapUntappdItems);
}
