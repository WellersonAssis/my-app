
import { StyleSheet } from "react-native"
import { getContext } from "../AuthContext"
import NavigatorDrawer from "../navigator/navigatorDrawer"




const DashView = ()=>{

    const vUser = getContext().user

    return(
        <NavigatorDrawer />

    )
}

export default DashView


const Style = StyleSheet.create({
    texto:{
        fontSize: 28,
        alignSelf: "center",
        marginTop: 25,
        
    }
})