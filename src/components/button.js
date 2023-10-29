import { StyleSheet, Text, TouchableOpacity } from "react-native";




const Button = ({ navigation }) => {



    return (
        <TouchableOpacity style={estilo.botao} onPress={ ()=> navigation.navigate('Login')}>

            <Text >
                LOGIN
            </Text>


        </TouchableOpacity>
    )

}

//Style
const estilo = StyleSheet.create({
    botao: {
        backgroundColor: 'red',
        padding: 30,
        borderRadius: 30,

    }
})





export default Button
