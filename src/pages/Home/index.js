import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native';

import tw from 'twrnc'
import { Text } from '../../components/StyledText';
import Button from '../../components/Button';

import { years } from '../../mock/years';

export default function Home() {
  const [year, setYear] = useState(new Date().getFullYear());
  const banner = years.find(item => item.year === year)?.banner
  return (
    <View style={tw`flex flex-col w-full h-full items-center justify-start py-[64px] px-5 bg-[#291E1A]`}>
      <View>
        {banner ?
          <Image style={tw`w-[350px] h-[350px] rounded-2xl mb-[32px]`} source={{ uri: banner }} />
          :
          <View style={tw`w-[350px] h-[350px] flex items-center justify-center rounded-2xl mb-[32px] bg-[#CDC2A777]`} >
            <Text className='text-[64px] text-[#CDC2A7] ' bold>
              EM BREVE...
            </Text>
          </View>
        }
      </View>
      <View style={tw`w-full rounded-xl border-[2px] p-3 border-dashed  border-[#F5EEE855]`}>
        <View style={tw`flex flex-row px-[18px] justify-between w-full`}>
          <TouchableOpacity onPress={() => year !== 2021 && setYear(year - 1)}>
            <Text className='text-[64px] text-[#CDC2A7] ' bold>
              {year !== 2021 ? "<" : ' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setYear(new Date().getFullYear())}>
            <Text className='text-[64px] my-1 text-[#fff] '>
              {year}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setYear(year + 1)}>
            <Text className='text-[64px] text-[#CDC2A7] ' bold>
              {">"}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Button style={tw`my-1`}>
            VER ÁLBUM
          </Button>
          <Button style={tw`my-1`}>
            ADICIONAR PAGINA
          </Button>
        </View>
      </View>
      <View style={tw`w-full rounded-xl border-[2px] py-2 px-3 my-6 border-dashed  border-[#F5EEE855]`}>
        <View style={tw`flex flex-row justify-around items-center`}>
          <View style={tw`w-[100px] h-[2px] bg-[#CDC2A777]`} />
          <Text className='text-3xl text-[#CDC2A7] ' bold>
            OU
          </Text>
          <View style={tw`w-[100px] h-[2px] bg-[#CDC2A777]`} />
        </View>
        <Button style={tw`my-1`}>
          NOVA FOTO
        </Button>
      </View>
    </View>
  )
}
