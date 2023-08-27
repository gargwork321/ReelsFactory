import React, {useState} from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import SquareButton from '../components/SquareButton';

const ScratchPad = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState<string>('Your Text');
  const [emoji, setEmoji] = useState<string>('🙂');
  const [isAddingText, setIsAddingText] = useState(false);
  const [isMainMenuVisiable, setIsMainMenuVisiable] = useState(true);
  const [isBGMenuVisiable, setIsBGMenuVisiable] = useState(false);
  const [isTextMenuVisiable, setIsTextMenuVisiable] = useState(false);

  const showBGMenu = () => {
    setIsMainMenuVisiable(false);
    setIsBGMenuVisiable(true);
  };
  const showTextMenu = () => {
    setIsMainMenuVisiable(false);
    setIsTextMenuVisiable(true);
  };

  const switchToMainMenu = () => {
    setIsBGMenuVisiable(false);
    setIsTextMenuVisiable(false);
    setIsMainMenuVisiable(true);
  };

  const pickImage = async () => {
    await launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };
  const addText = () => {
    setIsAddingText(true);
  };
  const pickVideo = async () => {
    await launchImageLibrary({mediaType: 'video'}, response => {
      if (!response.didCancel) {
        setSelectedVideo(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <SquareButton
          action={pickImage}
          imageSource={require('../resources/cross.png')}
        />
        <SquareButton
          action={pickImage}
          imageSource={require('../resources/preview.png')}
        />
        {isMainMenuVisiable ? (
          <SquareButton
            action={pickImage}
            imageSource={require('../resources/export.png')}
          />
        ) : (
          <SquareButton
            action={switchToMainMenu}
            imageSource={require('../resources/ok.png')}
          />
        )}
      </View>
      <View style={styles.craftBoard}>
        {selectedImage && (
          <Image source={{uri: selectedImage}} style={{flex: 1}} />
        )}
        {isAddingText && (
          <TextInput
            style={{marginTop: 20, borderWidth: 1, padding: 10}}
            placeholder="Enter Text"
            value={text}
            onChangeText={setText}
          />
        )}
      </View>
      <View style={styles.bottomBar}>
        {isMainMenuVisiable && (
          <>
            <SquareButton
              action={showBGMenu}
              title="Background"
              imageSource={require('../resources/background.png')}
              size={60}
            />
            <SquareButton
              action={showBGMenu}
              title="Photos"
              imageSource={require('../resources/add_image.png')}
            />
            <SquareButton
              action={showTextMenu}
              title="Text"
              imageSource={require('../resources/add-text.png')}
            />
            <SquareButton
              action={pickImage}
              title="Sticker"
              imageSource={require('../resources/sticker.png')}
            />
            <SquareButton
              action={pickImage}
              title="Audio"
              imageSource={require('../resources/sound.png')}
            />
            <SquareButton
              action={pickImage}
              title="Frame"
              imageSource={require('../resources/grid.png')}
            />
          </>
        )}
        {isBGMenuVisiable && (
          <>
            <SquareButton
              action={switchToMainMenu}
              title="Back"
              imageSource={require('../resources/back.png')}
            />
            <SquareButton
              action={pickImage}
              title="Image"
              imageSource={require('../resources/image.png')}
            />
            <SquareButton
              action={pickImage}
              title="Camera"
              imageSource={require('../resources/camera.png')}
            />
            <SquareButton
              action={addText}
              title="Gallery"
              imageSource={require('../resources/gallery.png')}
            />
            <SquareButton
              action={addText}
              title="Color"
              imageSource={require('../resources/paint-bucket.png')}
            />
            <SquareButton
              action={pickImage}
              title="Animation"
              imageSource={require('../resources/bounce.png')}
            />
          </>
        )}
        {isTextMenuVisiable && (
          <>
            <SquareButton
              action={switchToMainMenu}
              title="Back"
              imageSource={require('../resources/back.png')}
            />
            <SquareButton
              action={pickImage}
              title="Font"
              imageSource={require('../resources/font.png')}
            />
            <SquareButton
              action={addText}
              title="Color"
              imageSource={require('../resources/paint-bucket.png')}
            />
            <SquareButton
              action={pickImage}
              title="Size"
              imageSource={require('../resources/font-size.png')}
            />
            <SquareButton
              action={addText}
              title="Align"
              imageSource={require('../resources/text-align.png')}
            />
            <SquareButton
              action={pickImage}
              title="Shadow"
              imageSource={require('../resources/exposure.png')}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  craftBoard: {
    flex: 10,
    backgroundColor: 'darkorange',
    borderColor: 'black',
    borderWidth: 1,
  },
  bottomBar: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
export default ScratchPad;
