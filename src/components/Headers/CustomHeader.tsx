import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomText } from '@/components';
import { Theme } from '@/constants';

type CustomHeaderProps = {
  title: string;
};

const CustomHeader = ({ title }: CustomHeaderProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CustomText
          variant='Bold'
          size={17}>
          { title }
        </CustomText>
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
});
