import { createDrawerNavigator } from "@react-navigation/drawer"
import { Drawer } from "react-native-paper"


import SuporteView from "../../view/suporteview/suporteview.js"
import ListaView from "../../view/listaview/listaview.js"
const stack = createDrawerNavigator()

const NavigatorDrawer = ()=> {

    return(

        <Drawer.Navigator>
    

                <Drawer.Screen name="lista" componet={ListaView} />
                <Drawer.Screen name="suporte" componet={SuporteView} />


    
        </Drawer.Navigator>

    )



}

export default NavigatorDrawer