import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

export default function Album() {
  return (
    <View style={tw`flex flex-col w-full h-full items-center justify-start py-[64px] px-5 bg-[#291E1A]`}>
      <Text>Album</Text>
    </View>
  )
}