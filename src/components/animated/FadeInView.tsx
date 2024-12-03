import { PropsWithChildren, useEffect } from 'react';
import { Animated, useAnimatedValue, ViewStyle } from 'react-native';

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

export const FadeInView: React.FC<FadeInViewProps> = (props) => {
  const fadeAnim = useAnimatedValue(-100); // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        transform: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
