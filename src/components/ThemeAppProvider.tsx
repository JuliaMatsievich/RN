import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import { ThemeNameType } from 'types/theme.types.ts';

export interface ThemeContextProps {
  themeName: ThemeNameType;
  toggleTheme: () => Promise<void>;
  setThemeName: Dispatch<SetStateAction<ThemeNameType>>;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeAppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const systemTheme = useColorScheme() as ThemeNameType;
  const [themeName, setThemeName] = useState<ThemeNameType>(systemTheme);

  const toggleTheme = async () => {
    const newThemeName: ThemeNameType =
      themeName === 'light' ? 'dark' : 'light';
    setThemeName(newThemeName);
    await AsyncStorage.setItem('theme', newThemeName);
  };

  const getThemeFromStorage = async () => {
    const localTheme = await AsyncStorage.getItem('theme');
    return localTheme;
  };

  const getTheme = () => {
    getThemeFromStorage().then((localTheme) => {
      if (localTheme !== null) {
        setThemeName(localTheme as ThemeNameType);
      } else {
        setThemeName(systemTheme);
      }
    });
  };

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    getTheme();
  }, [systemTheme]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
