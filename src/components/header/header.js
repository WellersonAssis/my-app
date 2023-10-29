import { StyleSheet, Text, View } from "react-native"



const Header = () => {


    return (
        <View style={estilo.cab}>
            <Text style={estilo.cabTexto}>CABEÇALHO</Text>
        </View>
    )

}

const estilo = StyleSheet.create({
    cab: {
        backgroundColor: 'blue',
        width: '100%',
        position: 'absolute',
        top: 0,
        padding: 10,
        alignItems: 'center'
        
    },

    cabTexto: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
        

    }
})

export default Header