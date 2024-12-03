import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ButtonCustom from '../components/customUI/ButtonCustom.tsx';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

const CodeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const setToHomeScreen = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Получить код</Text>
      <ButtonCustom text={'Продолжить'} onPress={() => setToHomeScreen()} />
    </View>
  );
};

export default CodeScreen;
