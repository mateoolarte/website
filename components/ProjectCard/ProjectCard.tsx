import {
  Wrapper,
  Info,
  Icon,
  Name,
  Details,
  Description,
  BgImageContainer,
  BgImage,
} from './styles';

interface ProjectCardProps {
  name: string;
  icon: string;
  bgImage: string;
  date: string;
  role: string;
  description: string;
  link: string;
}

export function ProjectCard({
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
        {icon && (
          <Icon
            src={icon}
            alt={`Icon for ${name}`}
            height="45px"
            loading="lazy"
          />
        )}
        <Name>{name}</Name>
        <Details>
          {date} - {role}
        </Details>
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
