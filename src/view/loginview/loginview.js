import { StyleSheet, Text, View } from "react-native"



const Loginview = ({ navigation })=> {

    return(

        <View>
            <Text style={estilo.Texto}>LOGIN</Text>
        </View>

    )

}

const estilo = StyleSheet.create({

    Texto: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 25
    }

})


export default Loginview