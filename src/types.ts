export type Stat = {
  value: string;
  label: string;
};

export type Feature = {
  icon: string;
  label: string;
  description: string;
};

export type Review = {
  quote: string;
  source: string;
};

export type Hours = {
  day: string;
  time: string;
};

export type Social = {
  icon: string;
  label: string;
  href: string;
};

export type BeerMenuSource = "mock" | "untappd";
export type DrinksLoadStatus = "idle" | "loading" | "live" | "fallback" | "error";

export type BeerMenuItem = {
  id: string;
  name: string;
  style: string;
  abv: string;
  brewery: string;
  price: string;
  section: string;
  description: string;
  labelImage?: string;
  featured?: boolean;
};
