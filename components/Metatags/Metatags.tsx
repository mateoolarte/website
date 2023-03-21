import Head from "next/head";

import type { metatagsType } from "@/types/metatags";

interface MetatagsProps {
  data: metatagsType;
}

export function Metatags({ data }: MetatagsProps) {
  const { title, description } = data;

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
}
