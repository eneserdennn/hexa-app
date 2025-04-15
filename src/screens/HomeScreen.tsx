import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CustomText } from '@/components';
import { Theme } from '@/constants';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText>HomeScreen</CustomText>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
});
