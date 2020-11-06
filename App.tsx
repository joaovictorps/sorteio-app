import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View } from 'react-native';
import Application from './src';

export default function App() {
  return (
    <View>
      <Application />
      <StatusBar style="auto" />
    </View>
  );
}

