import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export type SlideHelloScreen = {
  imageSrc: FC<SvgProps>;
  title: string;
  text: string;
};
