import Homeindex from "../../Screens/Auth/Homeindex";
import Tellus from "../../Screens/Auth/Signup/Tellus";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginindex from "../../Screens/Auth/Login/Loginindex";


export type AuthProps={
    Homeindex:undefined,
    Tellus:undefined,
    Loginindex:undefined
}




const Stack=createNativeStackNavigator<AuthProps>()


const Authnavigation = () => {
  return (
    

    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Homeindex"  component={Homeindex} />
        <Stack.Screen name="Tellus"  component={Tellus} />
        <Stack.Screen name="Loginindex"  component={Loginindex} />
    </Stack.Navigator>
  )
}

export default Authnavigation