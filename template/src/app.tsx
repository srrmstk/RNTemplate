import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { navigationRef } from './navigation/root_navigation';
import RootNavigator from './navigation/root_navigator';
import { store } from './redux/store';

const App = (): JSX.Element => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
      <NavigationContainer onReady={() => RNBootSplash.hide()} ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  </GestureHandlerRootView>
);

export default App;
