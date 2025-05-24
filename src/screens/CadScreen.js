import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const cadastrar = async () => {
    if (usuario && senha) {
      await AsyncStorage.setItem('usuario', usuario);
      await AsyncStorage.setItem('senha', senha);
      setMensagem('Cadastro realizado com sucesso!');
      setTimeout(() => {
        navigation.replace('Login');
      }, 1000);
    } else {
      setMensagem('Preencha todos os campos');
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Cadastro</Text>
      <TextInput
        placeholder="Usuário ou Email"
        value={usuario}
        onChangeText={setUsuario}
        style={estilos.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={estilos.input}
      />
      {mensagem ? <Text style={estilos.mensagem}>{mensagem}</Text> : null}
      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8, borderRadius: 4 },
  mensagem: { color: 'green', marginBottom: 10, textAlign: 'center' },
});