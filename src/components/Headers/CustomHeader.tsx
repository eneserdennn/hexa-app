import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Theme } from '@/constants';

import { CustomText } from '../CustomText';

type CustomHeaderProps = {
  title: string;
  size?: 'small' | 'large';
  closeButton?: boolean;
};

const CustomHeader = ({ title, size = 'small', closeButton = false }: CustomHeaderProps) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']}>
        <View style={[styles.content]}>
          <CustomText
            variant='Bold'
            size={size === 'small' ? 17 : 22}>
            { title }
          </CustomText>
          { closeButton && (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name='close'
                size={28}
                color={Theme.colors.text}
              />
            </TouchableOpacity>
          ) }
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    minHeight: 60,
    paddingHorizontal: 24,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
