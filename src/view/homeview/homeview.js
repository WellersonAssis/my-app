import { StyleSheet, Text, View } from "react-native"



const Homeview = ()=> {

    return (

        <View>

            <Text style={estilo.Texto}>HOME</Text>

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

export default Homeview