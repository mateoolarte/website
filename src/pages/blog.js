import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout";

export default function Blog({ location }) {
  const pathname = (location && location.pathname) || "/";

  return (
    <Layout currentPage={pathname}>
      <SEO title="Blog" />
    </Layout>
  );
}
