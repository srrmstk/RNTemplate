import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NetInfo from '@react-native-community/netinfo';
import { HomeScreen } from '../screens';

const MainStack = createNativeStackNavigator();

export const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = MainStack;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        console.log('not connected');
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};
