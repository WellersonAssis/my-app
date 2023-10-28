import { StyleSheet, Text, View } from "react-native"



const Cadastroview = ()=> {

    return (

        <View>

            <Text style={estilo.Texto}>CADASTRO</Text>

        </View>

    )

    const estilo = StyleSheet.create({

        Texto: {
            flex: 1,
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 25
        }

    })


}

export default Cadastroview