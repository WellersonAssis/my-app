import { createDrawerNavigator } from "@react-navigation/drawer"


import SuporteView from "../../view/suporteview/suporteview.js"
import ListaView from "../../view/listaview/listaview.js"
const Drawer = createDrawerNavigator()

const NavigatorDrawer = ()=> {

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="lista" component={ListaView} />
            <Drawer.Screen name="suporte" component={SuporteView}/>
        </Drawer.Navigator>
        
    )

    



}

export default NavigatorDrawer