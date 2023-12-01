import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Card, Snackbar, TextInput } from "react-native-paper"
import { getContext } from "../../components/AuthContext"



const Cadastroview = ({ navagation }) => {

    console.log(getContext().nome)

    const [user, setText] = useState(
        {
            nome:'',
            email:'',
            senha:'',
            cpf:'',
            cep:'',
            logradouro:'',
            numero:'',
            cidade:'',
            bairro:''

        }

    )

    const [msgErro, setMsgErro] = useState("")

    const saveUsuario = ()=>{

        if (user.nome === ''){
            setMsgErro("O nome não pode ficar vazio")
            return
        }
        console.log({...user, perfil:'CLIENTE'})
        console.log( JSON.stringify({...user,perfil:'CLIENTE'}))
        const resp = fetch('http://localhost:3000/usuario',
        {
            "method": "post",
            "headers": {'Content-Type':'application/json'},
            "body": JSON.stringify({...user, perfil: 'CLIENTE'})

        })

    }

    return (

        <View>

            <Text style={estilo.Texto}>CADASTRO</Text>

            <Card>
                <Text variant="displaySmall">Nome</Text>
                <TextInput
                    label="Insira seu nome..."
                    mode="outlined"
                    onChangeText={text => setText({...text, nome: text})} />
            </Card>
            <Card>
                <Text variant="displaySmall">E-mail</Text>
                <TextInput
                    label="Insira seu e-mail..."
                    mode="outlined"
                    onChangeText={text => setText({...text, email: text})} />
            </Card>
            <Card>
                <Text variant="displaySmall">Senha</Text>
                <TextInput
                    label="Insira sua senha..."
                    mode="outlined"
                    onChangeText={text => setText({...text, senha: text})} />
            </Card>
            <Card>
                <Text variant="displaySmall">CPF</Text>
                <TextInput
                    label="insira o seu CPF..."
                    mode="outlined"
                    onChangeText={text => setText({...text, cpf: text})} />
            </Card>
            <Card>
                <Text variant="displaySmall">CEP</Text>
                <TextInput
                    label="Insira o seu CEP..."
                    mode="outlined"
                    onChangeText={text => setText({...text, cep: text})} />

            </Card>
            <Card>
                <Text variant="displaySmall">Logradouro</Text>
                <TextInput
                    label="Insira o seu logradouro..."
                    mode="outlined"
                    onChangeText={text => setText({...text, logradouro: text})} />
            </Card>
            <Card>
                <Text variant="displaySmall">Número</Text>
                <TextInput
                    label="Insira o seu número residêncial..."
                    mode="outlined"
                    onChangeText={text => setText({...text, numero: text})} />
            </Card>
            <Card>
                <Text variant="displaySmall">Cidade</Text>
                <TextInput
                    label="insira sua cidade..."
                    mode="outlined"
                    onChangeText={text => setText({...text, cidade: text})} />
            </Card>
            <Card>
                <Text variant="displaySmall">Bairro</Text>
                <TextInput
                    label="Insira o seu bairro..."
                    mode="outlined"
                    onChangeText={text => setText({...text, bairro: text})} />
            </Card>
            <Button
                icon={"content-save-outline"}
                mode="contained"
                style={estilo.botao}
                buttonColor="red"
                onPress={saveUsuario}

            >
                <Text>ENTRAR</Text>
            </Button>

            <Snackbar
                visible={msgErro !=''}
                onDismiss={() => setVisible(false)}
                action={{
                    label:'fechar',
                    onPress: () => {
                        setVisible(false)

                },
                }}>
                {msgErro}
            </Snackbar>


        </View>

    )

}

const estilo = StyleSheet.create({

    Texto: {
        fontSize: 10,
        alignSelf: 'center',
        marginTop: 5
    },
    botao: {
        marginTop: 5

    }

})


export default Cadastroview