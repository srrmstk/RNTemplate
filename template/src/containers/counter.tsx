import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { decrement, increment, incrementThunk } from '../redux/counter_slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);
  return (
    <View style={{ margin: 16, flexDirection: 'row', justifyContent: 'space-around' }}>
      <TouchableOpacity
        style={{ padding: 12, backgroundColor: '#ae4ae4', borderRadius: 16 }}
        activeOpacity={0.8}
        onPress={() => dispatch(increment(1))}
      >
        <Icon name="plus" color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 12, backgroundColor: '#ae4ae4', borderRadius: 16 }}
        activeOpacity={0.8}
        onPress={() => dispatch(incrementThunk())}
      >
        <Icon name="plus" color="#fff" />
      </TouchableOpacity>
      <Text>{counter.isLoading ? 'Loading...' : counter.value}</Text>
      <TouchableOpacity
        style={{ padding: 12, backgroundColor: '#ae4ae4', borderRadius: 16 }}
        activeOpacity={0.8}
        onPress={() => dispatch(decrement(1))}
      >
        <Icon name="minus" color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
