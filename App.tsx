import 'react-native-gesture-handler';
import React from 'react'
//import { LoginScreens } from './src/screens/LoginScreens';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/screens/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  )
}
export default App;
