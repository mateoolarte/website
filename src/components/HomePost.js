import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.article`
  margin-bottom: 1.4rem;
`;

const Title = styled(Link)`
  color: #02060c;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
`;

export default function HomePost({ title, link }) {
  return (
    <Wrapper>
      <Title to={link}>{title}</Title>
    </Wrapper>
  );
}
