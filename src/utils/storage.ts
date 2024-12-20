import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const os = Platform.OS;
// const webStorage = localStorage;
const appStorage = AsyncStorage;

export const getItem = async (key: string) => {
  if (key) {
    // return os === 'web'
    //   ? webStorage.getItem(key)
    //   :
    await appStorage.getItem(key);
  }

  return null;
};

export const setItem = async (key: string, payload: string) => {
  if (key && payload) {
    // return os === 'web'
    //   ? webStorage.setItem(key, payload)
    //   :
    await appStorage.setItem(key, payload);
  }

  return null;
};
