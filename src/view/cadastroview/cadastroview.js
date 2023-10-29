import { StyleSheet, Text, View } from "react-native"
import { Button, Card, TextInput } from "react-native-paper"



const Cadastroview = ({ navagation })=> {

    return (

        <View>

            <Text style={estilo.Texto}>CADASTRO</Text>

        <Card>
        <Text variant="displaySmall">Nome</Text>
        <TextInput
            label="Insira seu nome..."
            mode="outlined"
            onChangeText={text => setText(text)}/>
        </Card>
        <Card>
        <Text variant="displaySmall">Sobrenome</Text>
        <TextInput
            label="Insira seu sobrenome..."
            mode="outlined"
            onChangeText={text => setText(text)}/>
        </Card>
        <Card>
        <Text variant="displaySmall">E-mail</Text>
        <TextInput
            label="Insira seu e-mail..."
            mode="outlined"
            onChangeText={text => setText(text)}/>
        </Card>
        <Card>
        <Text variant="displaySmall">Telefone</Text>
        <TextInput
            label="Insira seu telefone..."
            mode="outlined"
            onChangeText={text => setText(text)}/>
        </Card>
        <Card>
        <Text variant="displaySmall">CPF</Text>
        <TextInput
            label="insira o seu CPF..."
            mode="outlined"
            onChangeText={text => setText(text)}/>
        </Card>
        <Card>
        <Text variant="displaySmall">Logradouro</Text>
        <TextInput
            label="Insira o seu logradouro..."
            mode="outlined"
            onChangeText={text => setText(text)}/>
        </Card>
        <Card>
        <Text variant="displaySmall">Estado</Text>
        <TextInput
            label="Insira o seu estado..."
            mode="outlined"
            onChangeText={text => setText(text)}/>
        </Card>
        <Card>
        <Text variant="displaySmall">Cidade</Text>
        <TextInput
            label="insira sua cidade..."
            mode="outlined"
            onChangeText={text => setText(text)}/>
        </Card>
        <Card>
        <Text variant="displaySmall">Bairro</Text>
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


        </View>

    )

}

const estilo = StyleSheet.create({

    Texto: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10
    },
    botao: {
        marginTop: 20

    }

})


export default Cadastroview