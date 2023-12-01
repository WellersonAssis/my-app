import { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { Button, Card } from "react-native-paper"
import { getContext } from "../../components/AuthContext"



const Loginview = ({ navigation }) => {

    const [form, setForm] = useState({login:'', senha:''})
    
    console.log(getContext())
    const log = getContext().login
   

    const logando = async()=>{

        const resp = await log ( form.login, form.senha )

        if (resp){
            navigation.navigate('Dash')
        }else{
            console.log( "Login ou senha incorreta")
        }
    }


    return (



        <View source={{ uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg' }}>
            <Card>

                <Card.Cover source={{ uri: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg' }} />

                <Text style={estilo.Texto}>Já é um CyberGame?... Entra ai!</Text>


                <Card>
                    <Text variant="displaySmall">Login</Text>
                    <TextInput
                        label="insira o seu e-mail"
                        mode="outlined"
                        value={form.login}
                        onChangeText={text => setForm( {...form, login: text} )} />
                </Card>
                <Card>
                    <Text variant="displaySmall">Senha</Text>
                    <TextInput
                        label="Insira o seu bairro..."
                        mode="outlined"
                        value={form.senha}
                        onChangeText={text => setForm( {...form, senha: text} )} />
                </Card>
                <Button
                    mode="contained"
                    style={estilo.botao}
                    buttonColor="blue"
                    onPress={logando}

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