import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tela de Login
// Esta tela permite que o usuário faça login com um nome de usuário e senha
export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const fazerLogin = async () => {
    const usuarioSalvo = await AsyncStorage.getItem('usuario');
    const senhaSalva = await AsyncStorage.getItem('senha');
    if (usuario === usuarioSalvo && senha === senhaSalva) {
      setMensagemErro('');
      navigation.replace('Home');
    } else {
      setMensagemErro('Usuário ou senha incorretos');
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Login</Text>
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
      {mensagemErro ? <Text style={estilos.erro}>{mensagemErro}</Text> : null}
      <Button title="Entrar" onPress={fazerLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={estilos.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8, borderRadius: 4 },
  erro: { color: 'red', marginBottom: 10, textAlign: 'center' },
  link: { color: 'blue', marginTop: 15, textAlign: 'center' },
});