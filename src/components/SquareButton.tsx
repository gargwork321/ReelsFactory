import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

type ButtonProps = {
  imageSource: any; // Use proper type for your image source
  action: () => void;
  title?: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  imageStyle?: ImageStyle;
  size?: number;
};

const SquareButton = ({
  title,
  imageSource,
  action,
  buttonStyle,
  titleStyle,
  imageStyle,
  size = 50, // default size
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {width: size + 15, height: size}, buttonStyle]}
      onPress={action}>
      {imageSource && (
        <Image source={imageSource} style={[styles.image, imageStyle]} />
      )}
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default SquareButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
  },
});
