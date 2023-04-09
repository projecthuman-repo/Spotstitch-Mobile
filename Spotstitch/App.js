import * as React from 'react';
// import { StyleSheet,  } from 'react-native';
import { Provider as PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native/lib/typescript/lib/src';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/core/theme';
import {
  LoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens';
import TrendingScreen from './src/screens/TrendingScreen';
import PostScreen from './src/screens/PostScreen';
import EventScreen from './src/screens/EventScreen';
import LoginOTPVerificationScreen from './src/screens/LoginOTPVerification';
import AccountCreationScreen from './src/screens/AccountCreation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoadingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen 
            name="LoadingScreen" 
            component={LoadingScreen} 
          />
          <Stack.Screen 
            name="StartScreen" 
            component={StartScreen} 
          />
          <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
          />
          <Stack.Screen 
            name="RegisterScreen" 
            component={RegisterScreen} 
          />
          <Stack.Screen 
            name="Dashboard" 
            component={Dashboard} 
          />
          <Stack.Screen 
            name="TrendingScreen" 
            component={TrendingScreen} 
          />
          <Stack.Screen 
            name="PostScreen" 
            component={PostScreen} 
          />
          <Stack.Screen 
            name="EventScreen" 
            component={EventScreen} 
          />
          <Stack.Screen 
            name="ResetPasswordScreen" 
            component={ResetPasswordScreen} 
          />
          <Stack.Screen 
            name="LoginOTPVerificationScreen" 
            component={LoginOTPVerificationScreen} 
          />
          <Stack.Screen 
            name="AccountCreationScreen" 
            component={AccountCreationScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

// check the theme for customization options. may have to add StyleSheets to certain screens as well.