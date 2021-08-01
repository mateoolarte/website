import React from 'react';
import styled from 'styled-components';

import { MEDIA_QUERIES } from '../constants';
import { linksColor, mainColor } from '../themes';

import { Layout } from '../components/shared/Layout';
import { Seo } from '../components/Seo';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
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
  font-size: 1.8rem;
`;

const Info = styled.div`
  width: 100%;
  padding-right: 2rem;

  ${MEDIA_QUERIES.landscape} {
    width: 60%;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
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

interface AboutProps {
  location: any;
}

export default function About({ location }: AboutProps) {
  const pathname = location?.pathname || '/';

  return (
    <Layout currentPage={pathname}>
      <Seo
        title="About me"
        description="I'm from Medellín, Colombia, passionate about the digital industry, working with modern technologies always finding the best solution to improve the quality of products"
      />

      <Wrapper>
        <Info>
          <Heading>Hi, I&apos;m Mateo Olarte</Heading>

          <p>
            I’m a Frontend developer from Medellín, Colombia. I passionate about
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
              <ItemLink href="/learning-links">Learning resources</ItemLink>
            </Item>
            <Item>
              <ItemLink href="/mentoring">Technical Mentorship</ItemLink>
            </Item>
          </Links>
        </Info>
      </Wrapper>
    </Layout>
  );
}
