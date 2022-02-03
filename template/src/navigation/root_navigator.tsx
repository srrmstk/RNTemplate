import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigator } from './main_navigator';
import { setLocale } from '../i18n';
import { SampleModalScreen } from '../screens';

const RootStack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  setLocale('ru');
  const { Navigator, Screen } = RootStack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={MainNavigator} />
      {/* Modals*/}
      <Screen
        name="SampleModalScreen"
        component={SampleModalScreen}
        options={{ presentation: 'transparentModal' }}
      />
    </Navigator>
  );
};

export default RootNavigator;
