import React from 'react';

import { StatusBar } from 'expo-status-bar';

//navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//pages
import Home from './src/pages/Home';
import Auth from './src/pages/Auth';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Auth" component={Auth} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}