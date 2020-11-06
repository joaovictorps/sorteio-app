import React from 'react';
import { View } from 'react-native';
import Titulo from './components/Titulo';
import TelaInicial from './components/TelaInicial';

export default function Application() {
  return (
    <View>
      <Titulo />
      <TelaInicial />
    </View>
  );
}
