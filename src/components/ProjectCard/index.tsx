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
