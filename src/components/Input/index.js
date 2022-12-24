import { View, TextInput } from 'react-native'
import React from 'react'

//fonts
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

//styles
import tw from 'twrnc';

export default function Input({ onChangeText, value, secureTextEntry, keyboardType, className }) {
  const [loaded] = useFonts({
    'AmaticSC-Bold': require('../../../assets/fonts/AmaticSC-Bold.ttf'),
  });

  return (!loaded ? <AppLoading /> :
    <View>
      <TextInput
        style={[tw`${className || "max-w-[90%] w-[90%] min-w-[300px] bg-[#CDC2A7] text-[#291E1A] rounded-[22px] px-10 border-t border-l py-3 border-[6px] text-4xl"}  flex items-center justify-center `, className || { color: '#291E1A' }, { fontFamily: 'AmaticSC-Bold' }]}
        value={value}
        keyboardType={keyboardType}
        textAlign={'center'}
        onChangeText={text => onChangeText(text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}