import { View, Text } from 'react-native'
import React from 'react'
import Authnavigation from './Authnavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


export type rootProps={
    Authnavi:undefined
}

const Stack=createNativeStackNavigator<rootProps>()

const NavigationIndex = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Authnavi'  component={Authnavigation} />
    </Stack.Navigator>

  )
}

export default NavigationIndex