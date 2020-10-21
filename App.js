/*
Name: Masum Modi and Manoj Manikantan Murlitharan
Assignment: Milestone 2: Prototype, interface implementation, implementing selected functionality
Group No: 6
*/

import React from 'react';
import SplashScreen from './components/SplashScreen'
import Login from './components/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

const { Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Navigator>
       <Screen name="SplashScreen" component={SplashScreen} />
       <Screen name="Login" component={Login} />
     </Navigator>
   </NavigationContainer>
  );
}