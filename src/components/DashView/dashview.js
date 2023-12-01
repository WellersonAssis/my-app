import { getContext } from "../AuthContext"
import NavigatorDrawer from "../navigator/navigatorDrawer"



const DashView = ()=>{

    const vUser = getContext.user

    return(
        <NavigatorDrawer />

    )
}

export default DashView