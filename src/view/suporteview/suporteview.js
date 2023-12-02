import { StyleSheet, Text, TouchableOpacity, View } from "react-native";




const SuporteView = ({navigation})=>{

    return(
        <View style={styles.container}>

            

            <Text style={styles.texto}>SUPORTE TESTE</Text>

        
        </View>
    )
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

export default SuporteView