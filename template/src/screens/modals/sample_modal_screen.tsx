import React from 'react';
import { Button, Text, View } from 'react-native';
import { navigationRef } from '../../navigation/root_navigation';

export const SampleModalScreen: React.FC = () => (
  <View style={{ flex: 1 }}>
    <Text>Modal</Text>
    <Button title="Back" onPress={() => navigationRef.goBack()} />
  </View>
);
