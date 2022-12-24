import { useContext } from 'react';
import { useLocation } from "@remix-run/react";

import { ThemeContext } from '~/context/ThemeContext';
import { checkLogo, setLogo } from './utils';
import { imgs } from './data';

import { Wrapper } from './styles';

export function Logo() {
  const { pathname: currentUrl } = useLocation();
  const { theme } = useContext(ThemeContext);
  const mainUrl = currentUrl.includes('blog') ? '/blog' : '/';

  return (
    <Wrapper to={mainUrl}>
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
            setLogo('medium', theme),
            setLogo('blog-small', theme)
          )}
          alt="Mateo Olarte Logo"
        />
      </picture>
    </Wrapper>
  );
}
