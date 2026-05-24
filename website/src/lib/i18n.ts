export const SITE_URL = "https://minnerom.com";

export const LOCALES = ["ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ru";

export const OTHER_LOCALE: Record<Locale, Locale> = {
  ru: "en",
  en: "ru",
};

export const CIS_COUNTRY_CODES = new Set([
  "RU",
  "BY",
  "KZ",
  "KG",
  "UZ",
  "TJ",
  "AM",
  "AZ",
  "MD",
  "TM",
]);

export function isLocale(value: string): value is Locale {
  return value === "ru" || value === "en";
}

export function otherLocale(locale: Locale): Locale {
  return OTHER_LOCALE[locale];
}

export function localizePath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `/${locale}/` : `/${locale}${normalized}`;
}

export function pathWithoutLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) {
    return "/";
  }

  const [first, ...rest] = parts;
  if (isLocale(first)) {
    return rest.length === 0 ? "/" : `/${rest.join("/")}`;
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}
