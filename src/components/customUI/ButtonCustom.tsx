import { useAppTheme } from 'hooks/useAppTheme.tsx';
import {
  PixelRatio,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';
import { ThemeApp } from 'types/theme.types.ts';
import { Fonts } from '../../config/fonts.ts';

interface ButtonCustomProps extends PressableProps {
  text: string;
  onPress?: () => void;
}

const ButtonCustom = ({ text, onPress }: ButtonCustomProps) => {
  const { theme } = useAppTheme();
  return (
    <Pressable onPress={onPress} style={styles(theme).buttonContainer}>
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
      width: '90%',
      cursor: 'pointer',
    },
    buttonText: {
      color: theme.button.text,
      fontFamily: Fonts.text,
      fontSize: 16,
    },
  });

export default ButtonCustom;
