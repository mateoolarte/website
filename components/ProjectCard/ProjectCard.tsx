import type { Project } from "@/types/projects";

import {
  Wrapper,
  Info,
  Icon,
  Name,
  Details,
  Description,
  BgImageContainer,
  BgImage,
} from "./styles";

export function ProjectCard(props: Project) {
  const { name, icon, bgImage, role, description, link } = props;

  return (
    <Wrapper href={link} target="_blank">
      <Info>
        {icon && (
          <Icon
            src={icon}
            alt={`Icon for ${name}`}
            height="45px"
            loading="lazy"
          />
        )}
        <Name>{name}</Name>
        <Details>{role}</Details>
        <Description>{description}</Description>
      </Info>
      {bgImage && (
        <BgImageContainer>
          <BgImage
            src={bgImage}
            className="backgroundImageProject"
            loading="lazy"
          />
        </BgImageContainer>
      )}
    </Wrapper>
  );
}
