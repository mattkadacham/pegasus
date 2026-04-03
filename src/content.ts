import type { Feature, Hours, Review, Social, Stat } from "./types";

export const navLinks = [
  { label: "Story", href: "#/?section=about" },
  { label: "Drinks", href: "#/?section=drinks" },
  { label: "Atmosphere", href: "#/?section=atmosphere" },
  { label: "Visit", href: "#/?section=visit" },
  { label: "Events", href: "#/?section=events" },
] as const;

export const stats: Stat[] = [
  { value: "14", label: "Rotating Taps" },
  { value: "100+", label: "World Gins" },
  { value: "50+", label: "Rare Rums" },
  { value: "2018", label: "Opened" },
];

export const featuredCategories = [
  {
    icon: "01",
    count: "14",
    name: "Craft Beer on Tap",
    description:
      "Fourteen rotating handles pouring standout UK and European breweries, from crisp lagers to juicy IPAs, deep stouts, and seasonal experiments.",
  },
  {
    icon: "02",
    count: "100+",
    name: "World Gins",
    description:
      "A globe-spanning gin wall with classic London dry staples, modern botanical bottles, and bartender-led serves built around your mood.",
  },
  {
    icon: "03",
    count: "50+",
    name: "Premium Rum",
    description:
      "A generous rum shelf with aged Caribbean pours, agricole character, and guided flights for guests who want to explore beyond the usual.",
  },
];

export const features: Feature[] = [
  {
    icon: "Eco",
    label: "Paper-Lite Service",
    description:
      "The venue keeps things low-waste with QR menus and a thoughtful approach to service details that usually get overlooked.",
  },
  {
    icon: "Live",
    label: "Tap Takeovers",
    description:
      "Regular brewery features and themed nights keep the room changing, so the experience never feels fixed or over-designed.",
  },
  {
    icon: "Seats",
    label: "Character Corners",
    description:
      "Original beams, tucked-away alcoves, and vintage cinema seating make the room feel like a local secret with polish.",
  },
  {
    icon: "Staff",
    label: "Guided Recommendations",
    description:
      "The staff know the list and can steer you from safe favourites to something unexpectedly perfect for your taste.",
  },
];

export const reviews: Review[] = [
  {
    quote:
      "A delightful gem that lands somewhere between a gin palace and a craft beer hideaway, with vintage seating and a lineup worth the detour.",
    source: "Wanderlog visitor review",
  },
  {
    quote:
      "Small, quirky, full of character, and backed by genuinely knowledgeable staff. The beer range alone makes it worth seeking out in Canterbury.",
    source: "Tripadvisor visitor review",
  },
];

export const openingHours: Hours[] = [
  { day: "Monday - Thursday", time: "5:00 pm - 11:00 pm" },
  { day: "Friday", time: "4:00 pm - 11:00 pm" },
  { day: "Saturday", time: "2:00 pm - 11:00 pm" },
  { day: "Sunday", time: "4:00 pm - 8:00 pm" },
];

export const socials: Social[] = [
  {
    icon: "IG",
    label: "Instagram",
    href: "https://www.instagram.com/pegasustaproom/",
  },
  {
    icon: "FB",
    label: "Facebook",
    href: "https://www.facebook.com/PegasusTapRoom/",
  },
  {
    icon: "UT",
    label: "Untappd",
    href: "https://untappd.com/v/pegasus-tap-room/8260044",
  },
];
