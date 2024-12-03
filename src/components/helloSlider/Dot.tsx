import ColorsApp from 'config/colorsApp.ts';
import { useAppTheme } from 'hooks/useAppTheme.tsx';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { StyleSheet } from 'react-native';
import { ThemeApp } from 'types/theme.types.ts';

interface IDotProps {
  id: number;
  progress: SharedValue<number>;
}

const Dot = ({ id, progress }: IDotProps) => {
  const inputRange = [id - 1, id, id + 1];
  const { theme } = useAppTheme();

  const animatedStyle = useAnimatedStyle(() => ({
    width: interpolate(
      progress.value,
      inputRange,
      [7, 37, 7],
      Extrapolation.CLAMP,
    ),
    opacity: interpolate(
      progress.value,
      inputRange,
      [0.2, 1, 0.2],
      Extrapolation.CLAMP,
    ),
  }));

  return <Animated.View style={[styles(theme).dot, animatedStyle]} />;
};

const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    dot: {
      height: 7,
      marginLeft: 4,
      borderRadius: 5,
      backgroundColor: theme.pagination,
    },
  });

export default Dot;
