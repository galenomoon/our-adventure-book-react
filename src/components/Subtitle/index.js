import { View } from 'react-native'
import React from 'react'

//components
import Input from '../Input';

export default function Subtitle({ setSubtitle, subtitle }) {
  return (
    <View>
      <Input
        onChangeText={setSubtitle}
        value={subtitle}
        className={"text-3xl text-[#fff] mt-3 mb-15"}
      />
    </View>
  )
}