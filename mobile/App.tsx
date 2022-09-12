import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, StyleProp } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Botao texto='day 1: iniciando em mobile 🤓' />
      <Botao texto='day 2: estou gostando de react-native 🤩' />
      <Botao texto='day 3: dev mobile ? 😳' />
      <Botao texto='day 4: será ? 🙄' />
      <Botao texto='day 5: irei ficar com os dois 🥰 '/>
      <StatusBar style="auto" />
    </View>
  );
}

interface BotaoProps {
  texto: string
}

function Botao (props : BotaoProps) {
  return (
    <TouchableOpacity style={styles.box}>
      <Text style={styles.textStyle}>
          {props.texto}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 17,
    padding: 12,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: '#C53030'
  },
  box: {
    marginBottom: 30
  }
});
