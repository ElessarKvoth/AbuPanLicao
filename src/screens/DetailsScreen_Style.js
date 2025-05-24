import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19f7ff', // Cor de fundo da tela
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color:'#1438db'
  },
  buttonContainer: {
    backgroundColor: '#f08080', // Cor de fundo do container do botão
    margin: 10,
    width: windowWidth * 0.5, // 50% da largura da tela
    borderRadius: 5,
  },
});

export default styles;
