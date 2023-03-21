import type { metatagsType } from "@/types/metatags";

interface metatagsRes {
  title: string;
  description: string;
}

export function metatags({ title, description }: metatagsType): metatagsRes {
  return {
    title: `${title} | Mateo Olarte | Frontend Engineer`,
    description: description || "",
  };
}
