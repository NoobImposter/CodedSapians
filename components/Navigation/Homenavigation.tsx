import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashBoardIndex from '../../Screens/DashBoard/dashIndex'
import Portfolioindex from '../../Screens/Portfolio/Portfolioindex'
import RefreshInputScreen from '../../Screens/Portfolio/Refreshindex'

export type HomenaviProp={
    Portfolioindex:undefined,
    RefreshInputScreen:undefined
}


const Homenavigation = () => {
  
    const Stack=createNativeStackNavigator<HomenaviProp>()
  
    return (
        
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen component={RefreshInputScreen}  name="RefreshInputScreen" />

        </Stack.Navigator>


  )
}

export default Homenavigation