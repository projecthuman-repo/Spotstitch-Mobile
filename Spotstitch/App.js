import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  LoadingScreen,
  LoginScreen,
} from './src/screens'
import LoginOTPVerificationScreen from './src/screens/LoginOTPVerification'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoadingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="LoginOTPVerificationScreen" component={LoginOTPVerificationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}