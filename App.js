import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/components/navigator/navigator';
import { AuthContext } from './src/components/AuthContext';
import 'react-native-gesture-handler';


export default function App() {
  return (


  <AuthContext>

      <Navigator />
    
  </AuthContext>

        

  
   

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
