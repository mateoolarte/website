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
} from "./styles";
import type { PostCardProps } from "./types";

export function PostCard({
  title,
  slug,
  publishedAt,
  categories,
  thumbnail,
  excerpt,
  isCover,
}: PostCardProps) {
  return (
    <Wrapper isCover={isCover}>
      <ImageContainer isCover={isCover}>
        <Image style={{ backgroundImage: `url("${thumbnail}")` }}></Image>
      </ImageContainer>
      <Info isCover={isCover}>
        {isCover && (
          <>
            <Category isCover={isCover}>{categories}</Category>
            <Title isCover={isCover}>{title}</Title>
            <DateText isCover={isCover}>{publishedAt}</DateText>
          </>
        )}

        {!isCover && (
          <>
            <Details>
              <Category>{categories}</Category>
              <DateText>{publishedAt}</DateText>
            </Details>
            <Title>{title}</Title>
          </>
        )}

        <Description isCover={isCover}>{excerpt}</Description>
        <Btn href={`/blog/${slug}`} isCover={isCover}>
          Leer más
        </Btn>
      </Info>
    </Wrapper>
  );
}
