import React, { Fragment } from "react";

import {
  Wrapper,
  ImageContainer,
  Image,
  Info,
  Details,
  Category,
  DateText,
  Title,
  Description,
  Btn,
} from "./styled";

export default function CoverPost({ node, isCover }) {
  const data = node && node.frontmatter;
  const categories = data && data.categories;
  const date = data && data.date;
  const path = data && data.path;
  const thumbnail = data && data.thumbnail;
  const title = data && data.title;
  const excerpt = node && node.excerpt;

  return (
    <Wrapper isCover={isCover}>
      <ImageContainer isCover={isCover}>
        <Image style={{ backgroundImage: `url(${thumbnail})` }}></Image>
      </ImageContainer>
      <Info isCover={isCover}>
        {isCover ? (
          <Fragment>
            <Category isCover={isCover}>{categories}</Category>
            <Title isCover={isCover}>{title}</Title>
            <DateText isCover={isCover}>{date}</DateText>
          </Fragment>
        ) : (
          <Fragment>
            <Details>
              <Category>{categories}</Category>
              <DateText>{date}</DateText>
            </Details>
            <Title>{title}</Title>
          </Fragment>
        )}

        <Description isCover={isCover}>{excerpt}</Description>
        <Btn to={`/blog/${path}`} isCover={isCover}>
          Leer más
        </Btn>
      </Info>
    </Wrapper>
  );
}
