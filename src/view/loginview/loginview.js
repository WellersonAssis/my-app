import { StyleSheet, Text, TextInput, View } from "react-native"
import { Button, Card } from "react-native-paper"



const Loginview = ({ navigation }) => {



    return (

        

    <View>
    <Card>

    <Card.Cover source={{ url:'' }}/>

            <Text style={estilo.Texto}>Já é um CyberGame?... Entra ai!</Text>
            

        <Card>
        <Text variant="displaySmall">E-mail</Text>
        <TextInput
            label="insira o seu e-mail"
            mode="outlined"
            onChangeText={text => setText(text)}/>
        </Card>
        <Card>
        <Text variant="displaySmall">Senha</Text>    
        <TextInput
            label="Insira o seu bairro..."
            mode="outlined"
            onChangeText={text => setText(text)}/>
        </Card>
        <Button
          mode="contained"
          style={estilo.botao}
          buttonColor="blue"
          
        >
          <Text>ENTRAR</Text>
        </Button>
    </Card>
    </View>


    )

}

const estilo = StyleSheet.create({

    Texto: {
        fontSize: 28,
        alignSelf: 'center',
        marginTop: 50
    },
    botao: {
        marginTop: 40,

    }

})


export default Loginview