import { useColorScheme } from 'react-native';

export const useThemeColor = () => {
  const theme = useColorScheme() ?? 'light';
  return theme;
};
