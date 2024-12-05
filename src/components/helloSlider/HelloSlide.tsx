import SvgDisplay from 'components/customUI/SvgDisplay.tsx';
import { Fonts } from 'config/fonts.ts';
import { useAppTheme } from 'hooks/useAppTheme.tsx';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { SlideHelloScreen } from 'types/slydes.types.ts';
import { ThemeApp } from 'types/theme.types.ts';

interface HelloSlideProps extends SlideHelloScreen {
  width: number;
  height: number;
  currentSlide: number;
}

const HelloSlide = ({
  width,
  height,
  imageSrc,
  title,
  text,
  currentSlide,
}: HelloSlideProps) => {
  const { theme } = useAppTheme();
  const translateY = useSharedValue(120);
  const translateYText = useSharedValue(10);
  const opacityText = useSharedValue(0);
  const opacityImage = useSharedValue(0);

  const pictureAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacityImage.value,
    };
  }, [currentSlide, translateY, opacityImage]);

  const textAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateYText.value }],
      opacity: opacityText.value,
    };
  }, [currentSlide, translateYText, opacityText]);

  useEffect(() => {
    if (currentSlide === 0) {
      opacityImage.value = 1;
      translateYText.value = 0;
      translateY.value = withDelay(
        200,
        withTiming(-10, {
          duration: 800,
          easing: Easing.linear,
        }),
      );
      opacityText.value = withDelay(
        210,
        withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        }),
      );
    }

    if (currentSlide >= 1) {
      opacityImage.value = withDelay(
        10,
        withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        }),
      );
      translateYText.value = withDelay(
        200,
        withTiming(-10, {
          duration: 800,
          easing: Easing.linear,
        }),
      );
    }

    return () => {
      opacityImage.value = 0;
      translateYText.value = 20;
    };
  }, [currentSlide, translateY, opacityText, opacityImage, translateYText]);

  return (
    <View style={[styles(theme).container, { width, height, marginTop: 80 }]}>
      <Animated.View
        style={[styles(theme).imageContainer, pictureAnimatedStyles]}
      >
        <SvgDisplay SvgComponent={imageSrc} />
      </Animated.View>

      <Animated.View style={[styles(theme).wrapperContent, textAnimatedStyles]}>
        <Text style={styles(theme).title}>{title}</Text>
        <Text style={styles(theme).text}>{text}</Text>
      </Animated.View>
    </View>
  );
};

const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    imageContainer: {
      width: '80%',
      height: '52%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapperContent: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginHorizontal: 20,
      marginBottom: 60,
    },
    title: {
      fontSize: 30,
      height: 77,
      marginBottom: 20,
      color: theme.title,
      fontFamily: Fonts.bold,
      textAlign: 'center',
      verticalAlign: 'bottom',
    },
    text: {
      fontSize: 16,
      color: theme.text,
      fontFamily: Fonts.light,
      textAlign: 'center',
      lineHeight: 24,
    },
  });

export default HelloSlide;
