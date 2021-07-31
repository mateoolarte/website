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

interface PostProps {
  node: any;
  isCover: boolean;
}

export function Post({ node, isCover }: PostProps) {
  const data = node?.frontmatter;
  const categories = data?.categories;
  const date = data?.date;
  const path = data?.path;
  const thumbnail = data?.thumbnail;
  const title = data?.title;
  const excerpt = node?.excerpt;

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
