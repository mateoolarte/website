import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

export default function Home({ location }) {
  const pathname = (location && location.pathname) || "/";

  return (
    <Layout currentPage={pathname}>
      <SEO title="Home" />
    </Layout>
  );
}
