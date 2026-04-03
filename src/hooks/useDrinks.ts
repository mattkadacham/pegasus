import { useEffect, useState } from "react";
import { fetchUntappdBeerMenu, getBeerMenuSource, getMockBeerMenu, hasUntappdConfig } from "../lib/beerMenu";
import type { BeerMenuItem, BeerMenuSource, DrinksLoadStatus } from "../types";

type UseDrinksResult = {
  items: BeerMenuItem[];
  source: BeerMenuSource;
  status: DrinksLoadStatus;
  message: string | null;
};

export function useDrinks(): UseDrinksResult {
  const [items, setItems] = useState<BeerMenuItem[]>(getMockBeerMenu());
  const [source, setSource] = useState<BeerMenuSource>(getBeerMenuSource());
  const [status, setStatus] = useState<DrinksLoadStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (getBeerMenuSource() !== "untappd") {
      setItems(getMockBeerMenu());
      setSource("mock");
      setStatus("fallback");
      setMessage("Showing a local snapshot of the current tap list. Set VITE_BEER_MENU_SOURCE=untappd to enable the live feed.");
      return;
    }

    if (!hasUntappdConfig()) {
      setItems(getMockBeerMenu());
      setSource("mock");
      setStatus("fallback");
      setMessage("Untappd mode is enabled, but the read-only credentials are missing. Falling back to the local tap-list snapshot.");
      return;
    }

    let active = true;
    setStatus("loading");
    setMessage("Loading live beer list from Untappd...");

    void fetchUntappdBeerMenu()
      .then((nextItems) => {
        if (!active) {
          return;
        }

        setItems(nextItems);
        setSource("untappd");
        setStatus("live");
        setMessage("Live beer list powered by Untappd for Business.");
      })
      .catch((error: unknown) => {
        if (!active) {
          return;
        }

        setItems(getMockBeerMenu());
        setSource("mock");
        setStatus("error");
        setMessage(error instanceof Error ? `${error.message} Showing the local tap-list snapshot instead.` : "Unable to load Untappd. Showing the local tap-list snapshot instead.");
      });

    return () => {
      active = false;
    };
  }, []);

  return { items, source, status, message };
}
