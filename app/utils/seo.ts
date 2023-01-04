interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SEOProps) {
  return {
    title: `${title} | Mateo Olarte | Frontend Engineer`,
    description,
  };
}
