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

export type MenuDrink = {
  id: string;
  name: string;
  category: string;
  style: string;
  abv: string;
  price: string;
  origin: string;
  tastingNotes: string;
  featured: boolean;
};
