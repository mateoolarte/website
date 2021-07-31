import React from "react";

import {
  Wrapper,
  Info,
  Icon,
  Name,
  Details,
  Description,
  BgImageContainer,
  BgImage,
} from "./styled";

interface ProjectCardProps {
  name: string;
  icon: string;
  bgImage: string;
  date: string;
  role: string;
  description: string;
  link: string;
}

export default function ProjectCard({
  name,
  icon,
  bgImage,
  date,
  role,
  description,
  link,
}: ProjectCardProps) {
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
