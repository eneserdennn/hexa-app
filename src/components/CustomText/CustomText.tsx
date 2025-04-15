/* eslint-disable no-restricted-imports */
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';

import { Theme } from '@/constants';

interface CustomTextProps extends TextProps {
  children?: React.ReactNode;
  variant?: 'Light' | 'Regular' | 'Medium' | 'SemiBold' | 'Bold' | 'ExtraBold',
  style?: StyleProp<TextStyle>;
  size?: number,
  numberOfLines?: number,
  ellipsizeMode?: TextProps['ellipsizeMode'],
  onPress?: TextProps['onPress']
};

const sizeStyle = (size: number) => {
  return { fontSize: size };
};

const fontStyle = (variant: CustomTextProps['variant']) => {
  return { fontFamily: 'Manrope-' + variant };
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  variant,
  style,
  size,
  numberOfLines,
  ellipsizeMode,
  onPress,
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        styles.defaultStyle,
        sizeStyle(size ? size : 12),
        fontStyle(variant ? variant : 'Regular'),
        style,
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      onPress={onPress}
    >
      { children }
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    color: Theme.colors.text,
    fontSize: 12,
  },
});

export default CustomText;
