import Homeindex from "../../Screens/Auth/Homeindex";
import Tellus from "../../Screens/Auth/Signup/Tellus";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginindex from "../../Screens/Auth/Login/Loginindex";
import Signupstep2 from "../../Screens/Auth/Signup/Signupstep2";
import Signupstep3 from "../../Screens/Auth/Signup/Signupstep3";
import Stepzero from "../../Screens/Auth/Signup/Step0";
export type AuthProps={
    Homeindex:undefined,
    Tellus:undefined,
    Loginindex:undefined,
    Signupstep2:undefined,
    Signupstep3:undefined,
    Stepzero:undefined

}




const Stack=createNativeStackNavigator<AuthProps>()


const Authnavigation = () => {
  return (
    

    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Homeindex"  component={Homeindex} />
             <Stack.Screen name="Loginindex"  component={Loginindex} />
                  <Stack.Screen name="Stepzero"  component={Stepzero} />
                  <Stack.Screen name="Tellus"  component={Tellus} />
   
                <Stack.Screen name="Signupstep2"  component={Signupstep2} />
                <Stack.Screen name="Signupstep3"  component={Signupstep3} />

    </Stack.Navigator>
  )
}

export default Authnavigation