import React, { useEffect, useState, useRef } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'

//libs
import moment from 'moment';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

//components
import Subtitle from '../../components/Subtitle';
import { Text } from '../../components/StyledText';

//styles
import tw from 'twrnc';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NewPhoto({ route }) {
  const { year } = route.params;
  const cameraRef = useRef(null)
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.front);
  const [subtitle, setSubtitle] = useState('*CLIQUE PARA ADICIONAR LEGENDA*');
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  const [image, setImageSelected] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function getImageFromGalery() {
    let result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.All, allowsEditing: true, aspect: [4, 3], quality: 1 });
    if (!result.canceled) {
      setImageSelected(result.uri);
    }
  }

  const confirmDeleteImage = () =>
    Alert.alert(
      "Deseja remover a foto?",
      "A foto será removida e não poderá ser recuperada.",
      [
        { text: "Cancel", onPress: () => { }, style: "cancel" },
        { text: "OK", onPress: () => [setImageSelected(null), setCapturedPhoto(null)] }
      ]
    );

  async function takePicture() {
    if (cameraRef) {
      let data = await cameraRef.current.takePictureAsync()
      setCapturedPhoto(data?.uri)
    }
  }

  return (
    <View style={tw`flex flex-col flex-1 items-center justify-center relative bg-[#291E1A]`}>
      <View style={tw`flex flex-row w-full justify-center items-center absolute top-15`}>
        <Text className="text-5xl text-white self-center" bold>{year}</Text>
      </View>
        <View style={tw`w-[80%] h-[3px] bg-[#ffffff33] absolute top-29`} />
      <View style={tw`flex flex-col w-[95%] h-[95%] rounded-md  items-center justify-center py-[32px] border-[2px]  border-dashed  border-[#F5EEE855]`}>
        <Text className="text-3xl text-white mb-3" bold>{moment().format('DD/MM/YYYY')}</Text>
        <View style={tw`flex flex-col px-[15px] pt-[15px] pb-[80px] rounded-md bg-white`}>
          <View style={tw` overflow-hidden h-[300px]`}>
            {(image || capturedPhoto) ?
              <TouchableOpacity onPress={() => confirmDeleteImage()}>
                <Image source={{ uri: image || capturedPhoto }} style={styles.camera} />
              </TouchableOpacity>
              : <Camera style={styles.camera} type={type} ref={cameraRef} />}
          </View>
        </View>
        <Subtitle setSubtitle={setSubtitle} subtitle={subtitle} />
        <View style={tw`flex w-full flex-row justify-evenly items-center px-5`}>
          <TouchableOpacity
            onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}
            style={tw`bg-[#CDC2A7] border-t w-[70px] h-[70px] border-l border-[4px] border-[#948A71] flex items-center justify-center rounded-full`}
          >
            <MaterialCommunityIcons name='camera-flip' color={"#291E1A"} size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={takePicture}
            style={tw`bg-[#CDC2A7] border-t p-4 border-l border-[4px] border-[#948A71] flex items-center justify-center rounded-full`}
          >
            <MaterialCommunityIcons name='camera' color={"#291E1A"} size={55} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={getImageFromGalery}
            style={tw`bg-[#CDC2A7] border-t w-[70px] h-[70px] border-l border-[4px] border-[#948A71] flex items-center justify-center rounded-full`}
          >
            <MaterialCommunityIcons name='image' color={"#291E1A"} size={35} />
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