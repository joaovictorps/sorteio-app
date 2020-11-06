import React, { useState } from 'react';
import { View, Text, Button, TextInput, TextInputProps } from 'react-native';
import estilo from './style';

interface Props {
    textAlign: TextInputProps;
}

const TelaInicial = () => {
  const [ numeroSorteado, setNumeroSorteado ] = useState(0);
  const [valorMinimo, setValorMinimo] = useState(0);
  const [valorMaximo, setValorMaximo] = useState(100);

  const [flagInputFocus, setFlagInputFocus ] = useState("");

  const gerarNumero = () => {
    const min = Number(valorMinimo);
    const max = Number(valorMaximo);

    if(!validarCampos(min, max)) {
        return;
    }

    const novoNumero = Math.floor(Math.random() * (max + 1 - min) + min);
    setNumeroSorteado(novoNumero);
  }

  const validarCampos = (minimo:number, maximo:number) => {
    if ( isNaN(minimo) || isNaN(maximo)) {
      alert('Digite os valores');
      return false;
    }

    if ( minimo >= maximo ) {
      alert('O valor mínimo deve ser menor que o valor máximo');
      return false;
    }

    return true;
  }

  return (
    <View style={estilo.tela}>
      <Text style={estilo.titulo}>
        Escolha os valores mínimo e máximo para fazer o sorteio.
      </Text>

      <View style={estilo.linhaInput}>
          <Text>Valor Mínimo:</Text>

          <TextInput 
            style={flagInputFocus === "txt_min" ?
            estilo.inputFocus : estilo.inputNormal}
            keyboardType = "number-pad"
            maxLength={5}
            autoFocus={true}
            onFocus = {()=>setFlagInputFocus("txt_min")}
            onBlur = {()=>setFlagInputFocus("")}
            value = {valorMinimo.toString()}
            onChangeText= {valor => setValorMinimo(Number(valor))}
            />
      </View>

      <View style={estilo.linhaInput}>
          <Text>Valor Máximo:</Text>

          <TextInput 
            style={flagInputFocus === "txt_max" ?
            estilo.inputFocus : estilo.inputNormal}
            keyboardType = "number-pad"
            maxLength={5}
            onFocus = {()=>setFlagInputFocus("txt_max")}
            onBlur = {()=>setFlagInputFocus("")}
            value = {valorMaximo.toString()}
            onChangeText= {valor => setValorMaximo(Number(valor))}
            />
      </View>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>{numeroSorteado}</Text>
      </View>

      <View style={estilo.boxBotao}>
        <Button title="Sortear" onPress={gerarNumero} color="#2ec4b6"/>
      </View>
    </View>
  );
}

export default TelaInicial;