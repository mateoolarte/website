import { IMG_URL_BASE } from "@/utils/constants";

export function checkLogo(url = "", website: string, blog: string): string {
  if (url.includes("blog")) return blog;

  return website;
}

export function setLogo(size: string, theme: string): string {
  const url = `${IMG_URL_BASE}logo-${size}-${theme}.png`;

  return url;
}
