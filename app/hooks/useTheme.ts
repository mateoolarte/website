import { useState, useEffect } from 'react';
import { isBrowser } from '~/utils/is-browser';

export function useTheme(): string {
  const [themeMode, seThemeMode] = useState('dark');

  useEffect(() => {
    if (isBrowser()) {
      const currentMode = window.localStorage.getItem('theme-mode');

      if (currentMode) {
        seThemeMode(currentMode);
      } else {
        const getSystemMode = window.matchMedia('(prefers-color-scheme: dark)');
        const matchedTheme = getSystemMode.matches ? 'dark' : 'light';
        seThemeMode(matchedTheme);

        window.localStorage.setItem('theme-mode', matchedTheme);

        return themeMode;
      }
    }
  }, [themeMode]);

  return themeMode;
}
