import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { I18nextProvider } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Theme } from '@/constants';
import { i18n } from '@/languages';

const queryClient = new QueryClient();

const MainLayout = () => {

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name='(stack)' />
    </Stack>
  );
};

export default function RootLayout() {
  const [i18nInstance] = useState(i18n);

  const [loaded, error] = useFonts({
    'Manrope-Bold': require('@/assets/fonts/Manrope-Bold.ttf'),
    'Manrope-ExtraBold': require('@/assets/fonts/Manrope-ExtraBold.ttf'),
    'Manrope-ExtraLight': require('@/assets/fonts/Manrope-ExtraLight.ttf'),
    'Manrope-Light': require('@/assets/fonts/Manrope-Light.ttf'),
    'Manrope-Medium': require('@/assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Regular': require('@/assets/fonts/Manrope-Regular.ttf'),
    'Manrope-SemiBold': require('@/assets/fonts/Manrope-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18nInstance}>
          <GestureHandlerRootView style={styles.root}>
            <MainLayout />
          </GestureHandlerRootView>
        </I18nextProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
});
