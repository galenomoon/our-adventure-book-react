import { View, Text as T } from 'react-native'
import React from 'react'

//fonts
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

//styles
import tw from 'twrnc';

export function Text({ bold, className, children }) {
  const [loaded] = useFonts({
    'AmaticSC-Bold': require('../../../assets/fonts/AmaticSC-Bold.ttf'),
    'AmaticSC-Regular': require('../../../assets/fonts/AmaticSC-Regular.ttf'),
  });

  return ( !loaded ? <AppLoading /> :
    <View>
      <T style={[tw`${className}`, { fontFamily: bold ? 'AmaticSC-Bold' : 'AmaticSC-Regular' }]}>{children}</T>
    </View>
  )
}