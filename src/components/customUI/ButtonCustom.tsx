import { Fonts } from '/config/fonts.ts';
import { useAppTheme } from 'hooks/useAppTheme.tsx';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import { ThemeApp } from 'types/theme.types.ts';

interface ButtonCustomProps extends PressableProps {
  text: string;
  onPress?: () => void;
  otherStyles?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
}

const ButtonCustom = ({
  text,
  onPress,
  isDisabled,
  ...otherProps
}: ButtonCustomProps) => {
  const { theme } = useAppTheme();
  return (
    <Pressable
      onPress={onPress}
      style={
        isDisabled
          ? [
              styles(theme).buttonContainer,
              styles(theme).buttonContainerDisabled,
            ]
          : styles(theme).buttonContainer
      }
      {...otherProps}
    >
      <Text style={styles(theme).buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    buttonContainer: {
      height: 55,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.button.background,
      borderRadius: 16,
      width: '100%',
      cursor: 'pointer',
    },
    buttonContainerDisabled: {
      opacity: 0.35,
    },
    buttonText: {
      color: theme.button.text,
      fontFamily: Fonts.light,
      fontSize: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default ButtonCustom;
