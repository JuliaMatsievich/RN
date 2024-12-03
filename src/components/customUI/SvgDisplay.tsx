import { FC } from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const SvgDisplay = ({ SvgComponent }: IntrinsicAttributes & FC<SvgProps>) => {
  return (
    <View>
      <SvgComponent />
    </View>
  );
};

export default SvgDisplay;
