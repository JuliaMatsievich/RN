import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InputField } from 'components/customUI/InputField.tsx';
import { Fonts } from 'config/fonts.ts';
import { useAppTheme } from 'hooks/useAppTheme.tsx';
import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { ThemeApp } from 'types/theme.types.ts';
import { commonStyles } from '../../app.styles.tsx';
import ButtonCustom from '../components/customUI/ButtonCustom.tsx';

const CodeScreen = () => {
  const { theme } = useAppTheme();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const setToHomeScreen = () => {
    navigation.navigate('Home');
  };
  const [code, setCode] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [timer, setTimer] = useState(60);
  const [isButtonSend, setIsButtonSend] = useState(false);
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const keyboard = useAnimatedKeyboard();
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));

  const handleChangeText = (value: string, index: number) => {
    const newCode = [...code];

    if (/^[0-9]*$/.test(value)) {
      newCode[index] = value;
      setCode(newCode);

      if (value.length === 1 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    }

    if (value.length === 0 && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
    1;
  };

  const handleSendCode = () => {
    setIsButtonSend(false);
    setTimer(60);
  };

  useEffect(() => {
    const intervalId = setInterval(() => setTimer((time) => time - 1), 1000);
    if (timer === 0) {
      setIsButtonSend(true);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, isButtonSend]);

  useEffect(() => {
    setIsDisabled(code.some((digit) => digit === ''));
    console.log('code', code);
  }, [code]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles(theme).container}>
        <View>
          <Text style={[commonStyles(theme).title, styles(theme).title]}>
            Код подтверждения
          </Text>
          <Text style={styles(theme).subtitle}>Код отправлен на номер .</Text>
          <Text style={styles(theme).subtitle}>Введите код из SMS</Text>
          <View style={styles(theme).form}>
            {Array.from(Array(4).keys()).map((_, index) => (
              <InputField
                keyboardType="phone-pad"
                onChangeText={(value) => handleChangeText(value, index)}
                value={code[index]}
                mask={'9'}
                style={styles(theme).input}
                key={index}
                ref={inputRefs[index]}
              />
            ))}
          </View>
          <Text
            style={[
              styles(theme).timer,
              isButtonSend ? { display: 'none' } : { display: 'flex' },
            ]}
          >
            Осталось времени: {timer} секунд
          </Text>
          <ButtonCustom
            style={[
              styles(theme).buttonSend,
              isButtonSend ? { display: 'flex' } : { display: 'none' },
            ]}
            text={'Отправить код снова'}
            onPress={() => handleSendCode()}
            disabled={code.some((digit) => digit === '') && isDisabled}
            isDisabled={isDisabled}
          />
        </View>

        <Animated.View style={[styles(theme).footer, animatedStyles]}>
          <View style={styles(theme).button}>
            <ButtonCustom
              text={'Продолжить'}
              onPress={() => setToHomeScreen()}
              disabled={code.length < 4}
              isDisabled={isDisabled}
            />
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = (theme: ThemeApp) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    title: {
      marginTop: 33,
    },
    subtitle: {
      fontSize: 15,
      fontFamily: Fonts.light,
      color: theme.text,
      marginTop: 12,
      width: '100%',
    },
    form: {
      marginTop: 46,
      flexDirection: 'row',
      gap: 16,
    },
    inputLabel: {
      fontSize: 13,
      fontFamily: Fonts.light,
      marginBottom: 7,
    },
    inputContainer: {
      position: 'relative',
      width: '100%',
      zIndex: 3,
    },
    timer: {
      fontSize: 16,
      fontFamily: Fonts.light,
      color: theme.input.text,
    },
    buttonSend: {
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.button.background,
      borderRadius: 16,
      width: '70%',
      cursor: 'pointer',
    },
    input: {
      padding: 14,
      width: 50,
      height: 55,
      fontSize: 26,
      fontFamily: Fonts.regular,
      color: theme.input.text,
    },
    footer: {
      width: '100%',
    },
    button: {
      alignItems: 'center',
      marginBottom: 30,
    },
  });

export default CodeScreen;
