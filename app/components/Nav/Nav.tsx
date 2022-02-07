import { useContext } from 'react';
import { useLocation } from 'remix';

import { websiteLinks, blogLinks } from '~/data/navigation';

import { ThemeContext } from '~/context/ThemeContext';

import DarkIcon from '~/components/icons/dark';
import LightIcon from '~/components/icons/light';

import { Wrapper, List, IconContainer, Box, Item, ThemeBtn } from './styles';

function checkLinks(value = '') {
  if (value.includes('blog')) {
    return blogLinks;
  }

  return websiteLinks;
}

export function Nav() {
  const { pathname: currentUrl } = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const links = checkLinks(currentUrl);
  const latestPostLink = '';

  function handleThemeMode(themeMode) {
    window.localStorage.setItem('theme-mode', themeMode);
    toggleTheme(themeMode);
  }

  return (
    <Wrapper>
      <List>
        {links.map(({ id, label, link, Icon, highlight }) => {
          const postUrl =
            label === 'Último post' ? `/blog/${latestPostLink}` : link;

          return (
            <Box key={id}>
              <Item
                to={postUrl}
                isActive={currentUrl === link}
                isBtn={highlight}
              >
                <IconContainer>
                  <Icon />
                </IconContainer>
                {label}
              </Item>
            </Box>
          );
        })}
      </List>

      <ThemeBtn
        type="button"
        onClick={() => handleThemeMode(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
      </ThemeBtn>
    </Wrapper>
  );
}
