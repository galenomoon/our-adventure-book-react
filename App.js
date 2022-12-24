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
import Album from './src/pages/Album';
import NewPhoto from './src/pages/NewPhoto';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Auth" component={Auth} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="Album" component={Album} />
        <Stack.Screen options={{ headerShown: false }} name="NewPhoto" component={NewPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}