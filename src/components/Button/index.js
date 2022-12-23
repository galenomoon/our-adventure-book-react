import { View, TouchableOpacity } from 'react-native'
import React from 'react'

//fonts
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

//styles
import tw from 'twrnc';
import { Text } from '../StyledText';

export default function Button({ onPress = () => { }, secureTextEntry, children, style }) {
  const [loaded] = useFonts({
    'AmaticSC-Bold': require('../../../assets/fonts/AmaticSC-Bold.ttf'),
  });

  return (!loaded ? <AppLoading /> :
    <View style={style}>
      <TouchableOpacity
        style={[tw`w-[300px] bg-[#CDC2A7] border-t w-full border-l border-[6px] flex items-center justify-center rounded-[22px]`, { color: '#291E1A' }, { fontFamily: 'AmaticSC-Bold' }]}
        onPress={text => onPress(text)}
        secureTextEntry={secureTextEntry}
      >
        <Text className='text-[#291E1A] text-[40px]' bold>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  )
}