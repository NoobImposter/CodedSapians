import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// 1. Import FontAwesome components and specific icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChartBar, faUser, faHouse } from '@fortawesome/free-solid-svg-icons'

import dashIndex from '../../Screens/DashBoard/dashIndex'
import Portfolioindex from '../../Screens/Portfolio/Portfolioindex'
import Userindex from '../../Screens/User/Userindex'

type props = {
  Home: undefined,
  Portfolio: undefined,
  User: undefined
}

const Tabs = createBottomTabNavigator<props>()

const Bottomtabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#008339',
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarStyle: {
          position: 'absolute',
          left: 10,
          right: 10,
         // Added bottom padding for the floating look
          height: 65,
          borderRadius: 20,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 5 },
        },
        // 2. Updated Icon logic using objects instead of strings
        tabBarIcon: ({ color, size }) => {
          let iconDefinition;

          if (route.name === 'Home') {
            iconDefinition = faHouse;
          } else if (route.name === 'Portfolio') {
            iconDefinition = faChartBar;
          } else if (route.name === 'User') {
            iconDefinition = faUser;
          } else {
            iconDefinition = faHouse; // Fallback
          }

          return <FontAwesomeIcon icon={iconDefinition} size={15} color={color} />;
        },
      })}
    >
     
      <Tabs.Screen name="Portfolio" component={Portfolioindex} />
      <Tabs.Screen name="User" component={Userindex} />
    </Tabs.Navigator>
  )
}

export default Bottomtabs