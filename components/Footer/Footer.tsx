import { useRouter } from "next/router";

import { socialLinks, info } from "@/data/secondaryNav";

import { Cta } from "./Cta";

import {
  Wrapper,
  SocialLinks,
  SocialItem,
  SocialLink,
  SocialIcon,
  Copyright,
} from "./styles";

export function Footer() {
  const router = useRouter();
  const { pathname: currentUrl } = router;
  const isSpanish = currentUrl.includes("blog");
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Cta content={isSpanish ? info.es : info.en} />
      <SocialLinks>
        {socialLinks.map(({ id, link, Icon }) => {
          return (
            <SocialItem key={id}>
              <SocialLink href={link} target="_blank">
                <SocialIcon>
                  <Icon />
                </SocialIcon>
              </SocialLink>
            </SocialItem>
          );
        })}
      </SocialLinks>
      <Copyright>
        {isSpanish ? info.es.madeBy : info.en.madeBy}{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        {isSpanish ? info.es.in : info.en.in}
        <strong>Medellín, Colombia</strong> <br />
        Mateo Olarte © {currentYear}
      </Copyright>
    </Wrapper>
  );
}
