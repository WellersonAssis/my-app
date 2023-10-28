import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/button' ;
import Button2 from './src/components/button2';

export default function App() {
  return (
    <View style={styles.container}>

      


      <Text>W.A.S. Games</Text>


        <Button />
        <Button2 />

      

      <StatusBar style="auto" />

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#35A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    fontSize: 60,
    fontWeight: 'bold',
    color: 'yellow',
  }
});

