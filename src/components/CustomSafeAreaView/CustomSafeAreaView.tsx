import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/constants';

type CustomSafeAreaViewProps = {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  statusBarColor?: string,
  topInset?: boolean,
  bottomInset?: boolean
};

const CustomSafeAreaView: React.FC<CustomSafeAreaViewProps> = ({
  children,
  containerStyle,
  topInset = true,
  bottomInset = true,
}) => {

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.safeArea, topInset && { paddingTop: insets.top }]}>
      <View style={[styles.container, containerStyle]}>
        { children }
      </View>
      { bottomInset && <View style={{ height: insets.bottom, backgroundColor: Theme.colors.background }} /> }
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
});

export default CustomSafeAreaView;
