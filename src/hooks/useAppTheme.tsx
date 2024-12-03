import { ThemeContext } from 'components/ThemeAppProvider.tsx';
import { darkTheme, lightTheme } from 'config/themes.ts';
import { useContext } from 'react';
import { ThemeApp } from 'types/theme.types.ts';

interface useThemeProps {
  theme: ThemeApp;
  // setTheme: Dispatch<SetStateAction<ThemeApp>>;
  toggleTheme: () => Promise<void>;
}

export const useAppTheme = (): useThemeProps => {
  const { themeName, toggleTheme } = useContext(ThemeContext)!;

  if (themeName === 'dark') {
    console.log('themeDarkHook', themeName);
    return {
      theme: darkTheme,
      toggleTheme,
    };
  }
  console.log('themeLightHook', themeName);

  return {
    theme: lightTheme,
    toggleTheme,
  };
};
