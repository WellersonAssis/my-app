import { StyleSheet, Text, TextInput, View } from "react-native"
import { Button, Card } from "react-native-paper"



const Loginview = ({ navigation }) => {



    return (

        

<View source= {{ uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg'}}>
    <Card>

    <Card.Cover source={{ uri:'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg' }}/>

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
        marginTop: 5
    },
    botao: {
        marginTop: 40,

    }

})


export default Loginview