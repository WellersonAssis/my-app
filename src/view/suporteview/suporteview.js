import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



const SuporteView = ({ navigation })=>{

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



export default SuporteView