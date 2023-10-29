import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/header/header";
import Button from "../../components/button";
import Button2 from "../../components/button2";
import { StatusBar } from "expo-status-bar";




const Homeview = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <Header />

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
        justifyContent: "space-evenly",
       
    },
    botao: {
        backgroundColor: 'red',
        padding: 30,
        borderRadius: 30,
        
      },
      botao2: {
        backgroundColor: 'yellow',
        padding: 30,
        borderRadius: 30,
      },


});


export default Homeview