import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ButtonCustom from '../components/customUI/ButtonCustom.tsx';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

const AuthorizationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const setToCodeScreen = () => {
    navigation.navigate('Code');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Авторизация</Text>
      <ButtonCustom text={'Получить код'} onPress={() => setToCodeScreen()} />
    </View>
  );
};

export default AuthorizationScreen;
