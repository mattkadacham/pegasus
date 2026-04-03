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

export type UntappdMenuResponse = {
  menu: UntappdMenu;
};

export type UntappdMenu = {
  id: number;
  location_id: number;
  uuid: string;
  name: string;
  description: string | null;
  footer: string | null;
  draft: boolean;
  unpublished: boolean;
  position: number;
  show_price_on_untappd: boolean;
  push_notification_frequency: string | null;
  created_at: string;
  updated_at: string;
  sections: UntappdSection[];
  on_deck_section: UntappdSection | null;
};

export type UntappdSection = {
  id: number;
  menu_id: number;
  position: number;
  name: string;
  description: string | null;
  type: string;
  public: boolean;
  created_at: string;
  updated_at: string;
  items: UntappdMenuItem[];
};

export type UntappdMenuItemType = "beer" | "wine" | "spirit" | "cider" | string;

export type UntappdMenuItem = {
  id: number;
  section_id: number;
  position: number;
  untappd_id: number | null;
  label_image: string | null;
  label_image_hd: string | null;
  label_image_thumb: string | null;
  original_label_image: string | null;
  original_label_image_hd: string | null;
  custom_label_image: string | null;
  custom_label_image_thumb: string | null;
  custom_label_image_filename: string | null;
  brewery_location: string | null;
  cask: boolean;
  nitro: boolean;
  local: boolean;
  tap_number: string | null;
  rating: string | null;
  rating_count: number | null;
  in_production: boolean | null;
  untappd_beer_slug: string | null;
  untappd_brewery_id: number | null;
  name: string | null;
  original_name: string | null;
  custom_name: string | null;
  description: string | null;
  custom_description: string | null;
  original_description: string | null;
  style: string | null;
  custom_style: string | null;
  original_style: string | null;
  brewery: string | null;
  brewery_country: string | null;
  custom_brewery: string | null;
  original_brewery: string | null;
  calories: string | null;
  custom_calories: string | null;
  original_calories: string | null;
  abv: string | null;
  custom_abv: string | null;
  original_abv: string | null;
  ibu: string | null;
  custom_ibu: string | null;
  original_ibu: string | null;
  created_at: string;
  updated_at: string;
  type: UntappdMenuItemType;
  default_image: string | null;
  producer: string | null;
  vintage: string | null;
  characteristics: string | null;
  category: string | null;
  location: string | null;
  containers: UntappdContainer[];
};

export type UntappdContainer = {
  id: number;
  item_id: number;
  container_size_id: number | string | null;
  price: string | number | null;
  position: number;
  container_size: UntappdContainerSize | null;
  created_at: string;
  updated_at: string;
  _track_by: number;
  calories: string | number | null;
  name: string | null;
  currency: string | null;
};

export type UntappdContainerSize = {
  id: number;
  name: string;
  ounces: string | number | null;
  position: number;
  created_at: string;
  updated_at: string;
};
