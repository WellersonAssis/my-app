import { StyleSheet, Text, TouchableOpacity } from "react-native";



const Button2 = ()=>{

    

    return(
        <TouchableOpacity style={estilo.botao}> 

            <Text >
                CADASTRO
            </Text>
            

        </TouchableOpacity>
    )

}

//Style
const estilo = StyleSheet.create({
    botao:{
        backgroundColor: 'yellow',
        padding: 30,
        borderRadius: 30,
        
    }
})





export default Button2
