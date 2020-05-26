import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";

export default function Home({ location }) {
  const pathname = (location && location.pathname) || "/";

  return (
    <Layout currentPage={pathname}>
      <SEO title="Home" />
      <HomeHero />
    </Layout>
  );
}
