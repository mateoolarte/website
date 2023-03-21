import { useContext } from "react";
import { useRouter } from "next/router";

import { ThemeContext } from "@/context/ThemeContext";
import { checkLogo, setLogo } from "./utils";
import { imgs } from "./data";

import { Wrapper } from "./styles";

export function Logo() {
  const router = useRouter();
  const { pathname: currentUrl } = router;
  const { theme } = useContext(ThemeContext);
  const mainUrl = currentUrl.includes("blog") ? "/blog" : "/";

  return (
    <Wrapper href={mainUrl}>
      <picture>
        {imgs.map(({ id, breakpoint, websiteSize, blogSize }) => {
          return (
            <source
              key={id}
              srcSet={checkLogo(
                currentUrl,
                setLogo(websiteSize, theme),
                setLogo(`blog-${blogSize}`, theme)
              )}
              media={`(${breakpoint})`}
            />
          );
        })}
        <img
          src={checkLogo(
            currentUrl,
            setLogo("medium", theme),
            setLogo("blog-small", theme)
          )}
          alt="Mateo Olarte Logo"
        />
      </picture>
    </Wrapper>
  );
}
