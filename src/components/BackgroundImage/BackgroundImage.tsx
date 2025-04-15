import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

import { images } from '@/constants';

type BackgroundImageProps = {
  transition?: number;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  transition = 1000,
}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={images.backGradient}
        contentFit='fill'
        transition={transition}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default BackgroundImage;
