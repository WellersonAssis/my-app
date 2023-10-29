import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/header/header";
import Button from "../../components/button";
import Button2 from "../../components/button2";
import { StatusBar } from "expo-status-bar";




const Homeview = ({ navigation }) => {

    return (
        <View style={styles.container}>

            

            <Text style={styles.texto}>CyberGames</Text>

            <StatusBar style="auto" />
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                <Text >
                    LOGIN
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Cadastro')}>
                <Text >
                    CADASTRO
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
       
    },
    botao: {
        backgroundColor: 'red',
        padding: 40,
        borderRadius: 30,
        
      },
      botao2: {
        backgroundColor: 'yellow',
        padding: 40,
        borderRadius: 30,
      },


});


export default Homeview