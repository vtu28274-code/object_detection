import React from 'react';
import {Text} from 'react-native';
import {Camera} from 'react-native-vision-camera';

export default function App() {
  return (
    <Text>
      {JSON.stringify(Object.keys(Camera), null, 2)}
    </Text>
  );
}