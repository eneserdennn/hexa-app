import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { StarsIcon } from '@/assets';
import { Theme } from '@/constants';

import CustomText from '../CustomText/CustomText';
import { LoadingIndicator } from '../Loading';

export type CustomButtonProps = {
  text: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

const CustomButton = ({ text, onPress, isLoading = false, disabled = false }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading || disabled}
      style={[styles.button, (isLoading || disabled) && styles.buttonLoading]}>
      <LinearGradient
        colors={Theme.colors.buttonGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 0 }}
        style={styles.gradient}
      >
        { isLoading ? (
          <LoadingIndicator
            color={Theme.colors.text}
            size='small' />
        ) : (
          <>
            <CustomText
              variant='Bold'
              size={17}
            >
              { text }
            </CustomText>
            <StarsIcon />
          </>
        ) }
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: '100%',
    borderRadius: 50,
    opacity: 1,
  },
  buttonLoading: {
    opacity: 0.5,
  },
  gradient: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
});
