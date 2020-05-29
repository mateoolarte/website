import React from "react";
import styled from "styled-components";

import { MEDIA_QUERIES } from "../constants";

import SEO from "../components/Seo";
import Layout from "../components/Layout";
import Post from "../components/Post";

import thumbImage from "../images/cover-educacion-moderna.jpg";

const posts = [
  {
    id: 1,
    slug: "educacion-moderna",
    title: "Educación moderna",
    category: "Tecnología",
    thumbnail: thumbImage,
    coverImage: thumbImage,
    date: "Abril 29, 2018",
    content:
      "Hola de nuevo, hoy vengo a contarles sobre algunas iniciativas en las cuales he participado y que me parecen excelentes opciones a la hora de aprender sobre temas tecnológicos…",
  },
  {
    id: 2,
    slug: "educacion-moderna",
    title: "Educación moderna",
    category: "Tecnología",
    thumbnail: thumbImage,
    coverImage: thumbImage,
    date: "Abril 28, 2018",
    content:
      "Hola de nuevo, hoy vengo a contarles sobre algunas iniciativas en las cuales he participado y que me parecen excelentes opciones a la hora de aprender sobre temas tecnológicos…",
  },
  {
    id: 3,
    slug: "educacion-moderna",
    title: "Educación moderna",
    category: "Tecnología",
    thumbnail: thumbImage,
    coverImage: thumbImage,
    date: "Abril 27, 2018",
    content:
      "Hola de nuevo, hoy vengo a contarles sobre algunas iniciativas en las cuales he participado y que me parecen excelentes opciones a la hora de aprender sobre temas tecnológicos…",
  },
  {
    id: 4,
    slug: "educacion-moderna",
    title: "Educación moderna",
    category: "Tecnología",
    thumbnail: thumbImage,
    coverImage: thumbImage,
    date: "Abril 27, 2018",
    content:
      "Hola de nuevo, hoy vengo a contarles sobre algunas iniciativas en las cuales he participado y que me parecen excelentes opciones a la hora de aprender sobre temas tecnológicos…",
  },
];

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 4rem;

  ${MEDIA_QUERIES.landscape} {
    margin-top: 2rem;
  }
`;

export default function Blog({ location }) {
  const pathname = (location && location.pathname) || "/";

  return (
    <Layout currentPage={pathname}>
      <SEO title="Blog" />

      <Wrapper>
        {posts.map((post, index) => {
          return <Post {...post} isCover={index === 0} />;
        })}
      </Wrapper>
    </Layout>
  );
}
