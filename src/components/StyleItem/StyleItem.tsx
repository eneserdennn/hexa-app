import React from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image } from 'expo-image';

import { EmptyIcon } from '@/assets';
import { CustomText } from '@/components';
import { Theme } from '@/constants';

type StyleItemProps = {
  item: {
    id: number;
    name: string;
    image: ImageSourcePropType | null;
  };
  isSelected?: boolean;
  onPress?: () => void;
};

const StyleItem = ({ item, isSelected = false, onPress }: StyleItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      { item.image ? (
        <Image
          source={item.image}
          style={[styles.image, isSelected && styles.selected]}
        />
      ) : (
        <View style={[styles.image, styles.noStyleImage, isSelected && styles.selected]}>
          <EmptyIcon />
        </View>
      ) }
      <CustomText
        variant={isSelected ? 'Bold' : 'Regular'}
        size={13}>
        { item.name }
      </CustomText>
    </TouchableOpacity>
  );
};

export default StyleItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 6,
  },
  selected: {
    borderWidth: 2,
    borderColor: Theme.colors.white,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 14,
  },
  noStyleImage: {
    backgroundColor: Theme.colors.placeholderBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
