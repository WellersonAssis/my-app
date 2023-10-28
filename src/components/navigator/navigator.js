import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Cadastroview from "../../view/cadastroview/cadastroview"
import Homeview from "../../view/homeview/homeview"
import Loginview from "../../view/loginview/loginview"



const stack = createStackNavigator()

const Navigator = ()=> {

    return(

        <NavigationContainer>
            <stack.Navigator initialRouteName="Home">

                <stack.Screen name="Home" component={Homeview}/>
                <stack.Screen name="Cadastro" component={Cadastroview}/>
                <stack.Screen name="Login" component={Loginview}/>

            </stack.Navigator>
        </NavigationContainer>

    )



}

export default Navigator