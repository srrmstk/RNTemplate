import React from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { navigate } from '../navigation/root_navigation';
import { Counter } from '../containers/counter';

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(offset.value * 255) }],
  }));

  const styles = {
    box: {
      width: 50,
      height: 50,
      backgroundColor: '#ae4ae4',
      borderRadius: 16,
      margin: 16,
    },
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? '#000' : '#fff',
          }}
        >
          <Animated.View style={[styles.box, animatedStyles]} />
          <Button
            onPress={() => {
              offset.value = Math.random();
            }}
            title="Move"
          />
          <Button
            onPress={() => {
              navigate('SampleModalScreen');
            }}
            title="Open Modal"
          />
          <Counter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
