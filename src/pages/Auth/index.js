import React, { useState, useEffect } from 'react'
import { View, Alert, Image, Keyboard } from 'react-native';
import { Text } from '../../components/StyledText';

import tw from 'twrnc';
import Input from '../../components/Input';

export default function Auth({ navigation }) {
  const [password, setPassword] = useState('')

  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => setIsKeyboardOpened(true));
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => setIsKeyboardOpened(false));
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  React.useEffect(() => {
    if (password === '210821') {
      navigation.navigate('Home')
      return
    }
    if (password.length === 6) {
      Alert.alert('Senha incorreta', 'Tente novamente')
      setPassword('')
    }
  }, [password])

  return (
    <View style={tw`flex flex-col flex-1 items-center justify-center bg-[#291E1A]`}>
      <View style={tw`flex flex-col w-[95%] h-[95%] rounded-md  items-center py-[32px] border-[2px]  border-dashed  border-[#F5EEE855]`}>
        <Image style={tw`w-[300px] h-[300px] ${isKeyboardOpened ? "mb-[22px]" : 'mb-[64px]'}`} source={require('../../../assets/images/logo.png')} />
        <Text className='text-5xl text-white' bold>DIGITE A SENHA:</Text>
        <Input
          keyboardType='numeric'
          value={password}
          onChangeText={text => password.length <= 6 ? setPassword(text) : setPassword('')}
          secureTextEntry
        />
      </View>
      {!isKeyboardOpened && <Image style={tw`w-[72px] h-[36px] absolute bottom-[52px]`} source={require('../../../assets/images/moon_rocket.png')} />}
    </View>
  )
}
