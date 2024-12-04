import { ThemeContext } from 'components/ThemeAppProvider.tsx';
import { darkTheme, lightTheme } from 'config/themes.ts';
import { useContext } from 'react';
import { ThemeApp } from 'types/theme.types.ts';

interface useThemeProps {
  theme: ThemeApp;
  themeName: string;
  // setTheme: Dispatch<SetStateAction<ThemeApp>>;
  toggleTheme: () => Promise<void>;
}

export const useAppTheme = (): useThemeProps => {
  const { themeName, toggleTheme } = useContext(ThemeContext)!;

  if (themeName === 'dark') {
    return {
      themeName,
      theme: darkTheme,
      toggleTheme,
    };
  }

  return {
    themeName,
    theme: lightTheme,
    toggleTheme,
  };
};
