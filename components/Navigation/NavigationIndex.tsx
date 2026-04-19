import { View, Text } from 'react-native'
import React from 'react'
import Authnavigation from './Authnavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homenavigation from './Homenavigation'
import Bottomtabs from './Bottomtabs'


export type rootProps={
    Authnavi:undefined,
    tabs:undefined,
    Home:undefined
}

const Stack=createNativeStackNavigator<rootProps>()

const NavigationIndex = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Authnavi'  component={Authnavigation} />
        <Stack.Screen name="tabs"  component={Bottomtabs} />
        <Stack.Screen name="Home"  component={Homenavigation} />

    </Stack.Navigator>

  )
}

export default NavigationIndex