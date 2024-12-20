import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CrossSvg from 'assets/icons/Cross.svg';
import FlagSvg from 'assets/icons/Flags.svg';
import { InputField } from 'components/customUI/InputField.tsx';
import { Fonts } from 'config/fonts.ts';
import { useAppTheme } from 'hooks/useAppTheme.tsx';
import React, { useState } from 'react';
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useAuthStore } from 'store/useAuthStore.ts';
import { ThemeApp } from 'types/theme.types.ts';
import { commonStyles } from '../../app.styles.tsx';
import ButtonCustom from '../components/customUI/ButtonCustom.tsx';

const AuthorizationScreen = () => {
  const { theme } = useAppTheme();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const setToCodeScreen = () => {
    navigation.navigate('Code');
    setUserPhone(`+7 ${phoneNumber}`);
  };
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const keyboard = useAnimatedKeyboard();

  const setUserPhone = useAuthStore((state) => state.setUserPhone);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));
  const handleChangeText = (value: string) => {
    setPhoneNumber(value);
    if (value.length >= 13) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleDeleteText = () => {
    setPhoneNumber('');
    setIsDisabled(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles(theme).container}>
        <View>
          <Text style={[commonStyles(theme).title, styles(theme).title]}>
            Авторизация
          </Text>
          <Text style={styles(theme).subtitle}>
            Войдите, чтобы управлять своими записями, управлять аккаунтом и
            смотреть ход лечения.
          </Text>
          <View style={styles(theme).form}>
            <Text style={styles(theme).inputLabel}>Номер телефона</Text>
            <View style={styles(theme).inputContainer}>
              <View style={styles(theme).inputBegin}>
                <FlagSvg style={styles(theme).flag} />
                <Text style={styles(theme).code}>+7</Text>
              </View>

              <InputField
                keyboardType="phone-pad"
                onChangeText={(value) => handleChangeText(value)}
                value={phoneNumber}
                mask={'999 999 99 99'}
                style={styles(theme).input}
              />
              <Pressable
                style={styles(theme).inputEndContainer}
                onPress={handleDeleteText}
              >
                <CrossSvg style={styles(theme).imageEnd} />
              </Pressable>
            </View>
          </View>
        </View>

        <Animated.View style={[styles(theme).footer, animatedStyles]}>
          <Text style={styles(theme).confedential}>
            Нажимая &#34;Получить код&#34; вы принимате условия
            <Text style={styles(theme).span}>
              {' '}
              Пользовательского соглашения
            </Text>{' '}
            и <Text style={styles(theme).span}>Политики кофиденциальности</Text>
            , а также разрешаете обработку своих данных
          </Text>
          <View style={styles(theme).button}>
            <ButtonCustom
              text={'Получить код'}
              onPress={() => setToCodeScreen()}
              disabled={phoneNumber.length < 9}
              isDisabled={isDisabled}
            />
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthorizationScreen;

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
    inputBegin: {
      position: 'absolute',
      top: 17.5,
      left: 16,
      width: 50,
      zIndex: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    flag: {
      marginRight: 5,
    },
    code: {
      fontSize: 16,
      fontFamily: Fonts.regular,
      color: theme.input.text,
    },
    input: {
      paddingHorizontal: 65,
      width: '100%',
      fontSize: 16,
      fontFamily: Fonts.regular,
      color: theme.input.text,
    },
    inputEndContainer: {
      position: 'absolute',
      top: 20,
      right: 16,
    },
    imageEnd: {
      width: '100%',
      zIndex: 2,
    },
    footer: {
      width: '100%',
    },
    confedential: {
      textAlign: 'center',
      fontFamily: Fonts.light,
      fontSize: 15,
      marginBottom: 25,
    },
    span: {
      fontFamily: Fonts.regular,
    },
    button: {
      alignItems: 'center',
      marginBottom: 30,
    },
  });
