import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  display: flex;
  width: calc(50% - 40px);
  height: 330px;
  margin-bottom: 5rem;
  border-radius: 0.6rem;
  color: #02060c;
  box-shadow: 0 3px 12px #dbdee3;
  text-decoration: none;

  &:nth-child(odd) {
    margin-right: 80px;
  }

  &:hover {
    .backgroundImageProject {
      opacity: 1;
    }
  }
`;

const Info = styled.div`
  width: 50%;
  padding: 1.5rem;
`;

const Icon = styled.img`
  height: 45px;
  margin-bottom: 0.5rem;
`;

const Name = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 600;
`;

const Details = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  font-weight: 300;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.4;
`;

const BgImageContainer = styled.div`
  width: 50%;
  border-radius: 0 0.6rem 0.6rem 0;
  box-shadow: -3px 0 12px #dbdee3;
`;

const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 0 0.6rem 0.6rem 0;
  opacity: 0.5;
`;

export default function ProjectCard({
  name,
  icon,
  bgImage,
  date,
  role,
  description,
  link,
}) {
  return (
    <Wrapper href={link} target="_blank">
      <Info>
        <Icon src={icon} alt={`Icon for ${name}`} />
        <Name>{name}</Name>
        <Details>
          {date} - {role}
        </Details>
        <Description>{description}</Description>
      </Info>
      <BgImageContainer>
        <BgImage
          className="backgroundImageProject"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      </BgImageContainer>
    </Wrapper>
  );
}
