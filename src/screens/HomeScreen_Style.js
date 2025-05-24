import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Alinha os itens no centro
    alignItems: 'center', // Centraliza os itens horizontalmente
    backgroundColor: '#19f7ff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#1438db', // Cor do texto do título
  },
  buttonContainer: {
    margin: 10,
    width: '80%', // Usa uma largura relativa para evitar problemas de layout
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#add8e6',
  },
});

export default styles;