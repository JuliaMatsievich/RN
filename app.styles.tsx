import { Fonts } from 'config/fonts.ts';
import { StyleSheet } from 'react-native';
import { ThemeApp } from 'types/theme.types.ts';

export const commonStyles = (theme: ThemeApp) =>
  StyleSheet.create({
    title: {
      fontSize: 30,
      fontFamily: Fonts.title,
      color: theme.title,
    },
  });
