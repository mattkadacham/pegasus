import type { BeerMenuSource } from "../types";

const envSource = import.meta.env.VITE_BEER_MENU_SOURCE;

export function getBeerMenuSource(): BeerMenuSource {
  return envSource === "untappd" ? "untappd" : "mock";
}
