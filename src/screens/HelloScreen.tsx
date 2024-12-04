import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Dot from 'components/helloSlider/Dot.tsx';
import { useAppTheme } from 'hooks/useAppTheme.tsx';
import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {
  Easing,
  SequencedTransition,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import ButtonCustom from '../components/customUI/ButtonCustom.tsx';
import HelloSlide from '../components/helloSlider/HelloSlide.tsx';
import { helloSlidesData } from '../data/helloSlidesData.ts';

const HelloScreen = () => {
  const { theme } = useAppTheme();
  const { width, height } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const flatListRef = useRef<FlatList>(null);

  const opacityText = useSharedValue(0);
  const progress = useSharedValue(0);

  useEffect(() => {
    opacityText.value = withDelay(
      210,
      withTiming(1, {
        duration: 500,
        easing: Easing.linear,
      }),
    );
  }, []);

  useEffect(() => {
    progress.value = withTiming(currentSlide, { duration: 200 });
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < helloSlidesData.length - 1) {
      setCurrentSlide(currentSlide + 1);
      flatListRef?.current?.scrollToIndex({
        index: currentSlide + 1,
        animated: true,
      });
    } else {
      navigation.navigate('Authorization');
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={helloSlidesData}
          ref={flatListRef}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <HelloSlide
              width={width}
              height={height}
              imageSrc={item.imageSrc}
              title={item.title}
              text={item.text}
              currentSlide={currentSlide}
            />
          )}
        />

        <Animated.View style={{ opacity: opacityText }}>
          <Animated.View
            layout={SequencedTransition}
            style={styles.paginationWrapper}
          >
            {Array.from(Array(3).keys()).map((_, index) => (
              <Dot id={index} key={index} progress={progress} />
            ))}
          </Animated.View>
          <View style={styles.buttonContainer}>
            <ButtonCustom text={'Далее'} onPress={() => nextSlide()} />
          </View>
        </Animated.View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  paginationWrapper: {
    position: 'absolute',
    bottom: 110,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
});

export default HelloScreen;
