import { useEffect, useState } from "react";
import { getBeerMenuSource } from "../lib/beerMenu";
import type { BeerMenuItem, BeerMenuSource, DrinksLoadStatus } from "../types";

type UseDrinksResult = {
  items: BeerMenuItem[];
  source: BeerMenuSource;
  status: DrinksLoadStatus;
  message: string | null;
};

export function useDrinks(): UseDrinksResult {
  const [items, setItems] = useState<BeerMenuItem[]>([]);
  const [source, setSource] = useState<BeerMenuSource>(getBeerMenuSource());
  const [status, setStatus] = useState<DrinksLoadStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const sourceType = getBeerMenuSource();

    async function loadMockMenu(nextStatus: DrinksLoadStatus, nextMessage: string) {
      const { getMockBeerMenu } = await import("../lib/beerMenu.mock");

      if (!active) {
        return;
      }

      setItems(getMockBeerMenu());
      setSource("mock");
      setStatus(nextStatus);
      setMessage(nextMessage);
    }

    if (sourceType !== "untappd") {
      void loadMockMenu("fallback", "Showing a local snapshot of the current tap list. Set VITE_BEER_MENU_SOURCE=untappd to enable the live feed.");
      return () => {
        active = false;
      };
    }

    setStatus("loading");
    setMessage("Loading live beer list from Untappd...");

    void import("../lib/beerMenu.untappd")
      .then(async ({ fetchUntappdBeerMenu, hasUntappdConfig }) => {
        if (!hasUntappdConfig()) {
          await loadMockMenu("fallback", "Untappd mode is enabled, but the read-only credentials are missing. Falling back to the local tap-list snapshot.");
          return;
        }

        const nextItems = await fetchUntappdBeerMenu();

        if (!active) {
          return;
        }

        setItems(nextItems);
        setSource("untappd");
        setStatus("live");
        setMessage("Live beer list powered by Untappd for Business.");
      })
      .catch(async (error: unknown) => {
        if (!active) {
          return;
        }

        const fallbackMessage =
          error instanceof Error
            ? `${error.message} Showing the local tap-list snapshot instead.`
            : "Unable to load Untappd. Showing the local tap-list snapshot instead.";

        await loadMockMenu("error", fallbackMessage);
      });

    return () => {
      active = false;
    };
  }, []);

  return { items, source, status, message };
}
