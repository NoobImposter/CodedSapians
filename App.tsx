import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Homeindex from './Screens/Auth/Homeindex';
import NavigationIndex from './components/Navigation/NavigationIndex';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationIndex />

      </NavigationContainer>

    
    </SafeAreaProvider>
  );
}



export default App;
