import React from "react";

import { Wrapper, Title } from "./styled";

export default function HomePost({ title, link }) {
  return (
    <Wrapper>
      <Title to={link}>{title}</Title>
    </Wrapper>
  );
}
