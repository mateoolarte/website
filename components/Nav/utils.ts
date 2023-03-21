import { websiteLinks, blogLinks } from "@/data/navigation";

export function checkLinks(value = "") {
  if (value.includes("blog")) {
    return blogLinks;
  }

  return websiteLinks;
}
