import Head from "next/head";

interface MetatagsProps {
  data: any;
}

export function Metatags({ data }: MetatagsProps) {
  const { title, description } = data;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
