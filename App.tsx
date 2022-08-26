import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigation } from './src/navigator/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral />
      </AppState>
      {/* <StackNavigation /> */}
      {/* <MenuLateralBasico /> */}
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;