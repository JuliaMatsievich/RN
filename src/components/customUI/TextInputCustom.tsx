import { Fonts } from 'config/fonts.ts';
import { useAppTheme } from 'hooks/useAppTheme.tsx';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';
import { ThemeApp } from 'types/theme.types.ts';

interface IThemedTextInputProps extends MaskedTextInputProps {}

export const TextInputCustom: FC<IThemedTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  style,
  ...otherProps
}) => {
  const { theme } = useAppTheme();
  return (
    <MaskedTextInput
      style={[styles(theme).input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      cursorColor={theme.input.cursor}
      placeholderTextColor={theme.input.placeholder}
      selectionColor={theme.input.selection}
      secureTextEntry={secureTextEntry}
      {...otherProps}
    />
  );
};

const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    input: {
      borderRadius: 12,
      width: '90%',
      minHeight: 48,
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: theme.input.background,
      color: theme.input.text,
      borderColor: theme.input.border,
      borderWidth: 1,
      borderStyle: 'solid',
      marginBottom: 20,
      fontSize: 16,
      fontFamily: Fonts.text,
      // textAlignVertical: 'top',
    },
  });
