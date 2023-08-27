import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  Video,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import VideoPlayer from 'react-native-video';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import SquareButton from '../components/SquareButton';

const ScratchPad = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const pickImage = async () => {
    console.log('open image picker');
    await launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        console.log('image picker response', response.assets[0].uri);
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const pickVideo = async () => {
    await launchImageLibrary({mediaType: 'video'}, response => {
      if (!response.didCancel) {
        setSelectedVideo(response.uri);
      }
    });
  };

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
          backgroundColor: 'cyan',
        },
      ]}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <SquareButton
          action={pickImage}
          imageSource={require('../resources/cross.png')}
          size={40}
        />
        <SquareButton
          action={pickImage}
          imageSource={require('../resources/preview.png')}
          size={40}
        />
        <SquareButton
          action={pickImage}
          imageSource={require('../resources/export.png')}
          size={40}
        />
      </View>
      <View
        style={{
          flex: 8,
          backgroundColor: 'darkorange',
          borderColor: 'black',
          borderWidth: 1,
        }}>
        {selectedImage && (
          <Image source={{uri: selectedImage}} style={{flex: 1}} />
        )}
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <SquareButton
          action={pickImage}
          title="Background"
          imageSource={require('../resources/background.png')}
          size={60}
        />
        <SquareButton
          action={pickImage}
          title="Image"
          imageSource={require('../resources/add_image.png')}
          size={60}
        />
        <SquareButton
          action={pickImage}
          title="Text"
          imageSource={require('../resources/add-text.png')}
          size={60}
        />
        <SquareButton
          action={pickImage}
          title="Sticker"
          imageSource={require('../resources/sticker.png')}
          size={60}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
  },
});
export default ScratchPad;
