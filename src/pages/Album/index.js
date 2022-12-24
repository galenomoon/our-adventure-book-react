import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'

//libs
import moment from 'moment';

//components
import Subtitle from '../../components/Subtitle';
import { Text } from '../../components/StyledText';

//styles
import tw from 'twrnc';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Album({ route }) {
  const { year } = route.params;
  const [subtitle, setSubtitle] = useState('*CLIQUE PARA ADICIONAR LEGENDA*');
  const [page_index, setPhotoIndex] = useState(1);
  const pages = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  const confirmDeletePage = () =>
    Alert.alert(
      "Deseja remover esta página?",
      "A página será removida e não poderá ser recuperada.",
      [
        { text: "Cancel", onPress: () => { }, style: "cancel" },
        { text: "OK", onPress: () => { } }
      ]
    );

  return (
    <View style={tw`flex flex-col flex-1 items-center justify-center relative bg-[#291E1A]`}>
      <View style={tw`flex flex-row w-full justify-center items-center absolute top-15`}>
        <Text className="text-5xl text-white self-center" bold>{year}</Text>
      </View>
      <View style={tw`flex flex-col w-[95%] h-[95%] rounded-md  items-center justify-center py-[32px] border-[2px]  border-dashed  border-[#F5EEE855]`}>
        <Text className="text-3xl text-white mb-3" bold>{moment().format('DD/MM/YYYY')}</Text>
        <View style={tw`flex flex-col px-[15px] pt-[15px] pb-[80px] rounded-md bg-white`}>
          <View style={tw` overflow-hidden h-[300px]`}>
            <TouchableOpacity onPress={() => confirmDeletePage()}>
              <Image source={{ uri: pages[page_index]?.photo }} style={styles.camera} />
            </TouchableOpacity>
          </View>
        </View>
        <Subtitle setSubtitle={setSubtitle} subtitle={subtitle} />
        <View style={tw`flex flex-row px-[18px] justify-between w-full`}>
          <TouchableOpacity onPress={() => page_index !== 1 && setPhotoIndex(page_index - 1)}>
            <Text className='text-[64px] text-[#CDC2A7] ' bold>
              {page_index !== 1 ? "<" : ' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPhotoIndex(1)}>
            <Text className='text-[64px] my-1 text-[#fff] '>
              {page_index}/{pages.length}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPhotoIndex(page_index + 1)}>
            <Text className='text-[64px] text-[#CDC2A7] ' bold>
              {page_index === pages.length ? "" : '>'}
            </Text>
          </TouchableOpacity>
        </View>
        <Image style={tw`w-[72px] h-[36px] absolute bottom-[32px]`} source={require('../../../assets/images/moon_rocket.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  camera: {
    backgroundColor: '#555',
    width: 300,
    height: 400,
    borderRadius: 5,
    boxShadow: '0px 0px 10px #000',
  },
  frame: {
    display: 'flex',
    backgroundColor: '#fff',
    width: 320,
    height: 400,
    alignItems: 'center',
    padding: 30,
    boxShadow: '0px 0px 10px #000',
    borderRadius: 2,
  }
})