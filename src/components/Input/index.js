import { View, TextInput } from 'react-native'
import React from 'react'

//fonts
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

//styles
import tw from 'twrnc';

export default function Input({ onChangeText, value, secureTextEntry, keyboardType }) {
  const [loaded] = useFonts({
    'AmaticSC-Bold': require('../../../assets/fonts/AmaticSC-Bold.ttf'),
  });

  return (!loaded ? <AppLoading /> :
    <View>
      <TextInput
        style={[tw`w-[300px] bg-[#CDC2A7] py-3 border-t border-l border-[6px] flex items-center justify-center rounded-[22px] text-[#291E1A] text-white text-4xl`, { color: '#291E1A' }, { fontFamily: 'AmaticSC-Bold' }]}
        value={value}
        keyboardType={keyboardType}
        textAlign={'center'}
        onChangeText={text => onChangeText(text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}