/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BEER_MENU_SOURCE?: "mock" | "untappd";
  readonly VITE_UNTAPPD_EMAIL?: string;
  readonly VITE_UNTAPPD_READ_ONLY_TOKEN?: string;
  readonly VITE_UNTAPPD_MENU_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
