import styled from "styled-components";

import { metatags } from "@/utils/metatags";
import { MEDIA_QUERIES } from "@/utils/constants";
import { linksColor, mainColor } from "@/utils/themes";

import { Layout } from "@/containers/Layout";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4rem;

  ${MEDIA_QUERIES.tablet} {
    margin-top: 4rem;
    margin-bottom: 8rem;
  }
`;

const Heading = styled.h3`
  margin-top: 0;
  margin-bottom: 2.5rem;
  color: ${mainColor};
  font-size: 2rem;
`;

const Info = styled.div`
  width: 100%;

  ${MEDIA_QUERIES.landscape} {
    width: 60%;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

const LinksHeading = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1.4rem;
  color: ${mainColor};
  font-size: 1.6rem;
`;

const Links = styled.ul`
  margin: 0;
  line-height: 1.5;
`;

const Item = styled.li`
  margin-bottom: 0.5rem;
`;

const ItemLink = styled.a`
  color: ${linksColor};
  font-size: 1.1rem;
`;

const meta = metatags({
  title: "About",
  description:
    "I’m a Frontend Engineer from Medellín, Colombia. I passionate about technology especially web development, I like to work with modern technologies and always trying to learn new things to find the best solution to improve the quality of products.",
});

export default function About() {
  return (
    <Layout metatags={meta}>
      <Wrapper>
        <Info>
          <Heading>Hi, I&apos;m Mateo Olarte</Heading>

          <p>
            I’m a Frontend Engineer from Medellín, Colombia. I passionate about
            technology especially web development, I like to work with modern
            technologies and always trying to learn new things to find the best
            solution to improve the quality of products.
          </p>

          <p>
            In high school, I found programming something interesting because I
            could create things through code and see how that can improve the
            lives of people. Then I decided to teach myself to code this allows
            me to have a lot of opportunities and growth in my professional
            career.
          </p>

          <p>
            I have been working on different kinds of companies where I have
            been the chance to solve bussiness challenges that give me more
            experienced building digital projects and make an impact on the
            world.
          </p>

          <p>
            Also, I like to play with design things and user experience to
            deliver better quality in my developments.
          </p>

          <LinksHeading>Resources</LinksHeading>
          <Links>
            <Item>
              <ItemLink
                href="https://github.com/mateoolarte/bookmarks"
                target="_blank"
              >
                Learning resources (Deprecated)
              </ItemLink>
            </Item>
            <Item>
              <ItemLink
                href="https://calendly.com/mateoolarte/mentorship"
                target="_blank"
              >
                Need some technical help? Schedule a meeting here.
              </ItemLink>
            </Item>
          </Links>
        </Info>
      </Wrapper>
    </Layout>
  );
}
