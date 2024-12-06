import { Fonts } from 'config/fonts.ts';
import { useAppTheme } from 'hooks/useAppTheme.tsx';
import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';
import { ThemeApp } from 'types/theme.types.ts';

// interface TextInputProps extends MaskedTextInputProps {}

const InputFieldComponent: ForwardRefRenderFunction<
  TextInput,
  MaskedTextInputProps
> = (
  { placeholder, value, onChangeText, secureTextEntry, style, ...rest },
  ref,
) => {
  const { theme } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <MaskedTextInput
      style={
        isFocused
          ? [styles(theme).input, styles(theme).inputFocus, style]
          : [styles(theme).input, style]
      }
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      cursorColor={theme.input.cursor}
      placeholderTextColor={theme.input.placeholder}
      selectionColor={theme.input.selection}
      secureTextEntry={secureTextEntry}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      ref={ref}
      {...rest}
    />
  );
};

export const InputField = forwardRef(InputFieldComponent);

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
      fontFamily: Fonts.light,
      // textAlignVertical: 'top',
    },
    inputFocus: {
      borderColor: theme.input.borderFocus,
    },
  });
