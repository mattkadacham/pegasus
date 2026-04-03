import mockBeerMenu from "../data/mockBeerMenu.json";
import type { BeerMenuItem } from "../types";

export function getMockBeerMenu() {
  return mockBeerMenu as BeerMenuItem[];
}
