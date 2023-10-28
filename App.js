import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/button';
import Button2 from './src/components/button2';
import Header from './src/components/header/header';


export default function App() {
  return (
    <View style={styles.container}>

      <Header/>

      <Text style={styles.texto}>CyberGames</Text>


      <View style={styles.buttonContainer}>
        <Button />
        <Button2 />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
