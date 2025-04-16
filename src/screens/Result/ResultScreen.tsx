import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CopyIcon } from '@/assets';
import { BackgroundImage, CustomText, Layout } from '@/components';
import { mockStyles, Theme } from '@/constants';
import { useLogoStore } from '@/store';

const ResultScreen = () => {
  const { t } = useTranslation();
  const { prompt, selectedStyle } = useLogoStore();
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = async () => {
    await Clipboard.setStringAsync(prompt || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <View style={styles.container}>
        <BackgroundImage />
        <SafeAreaView
          edges={['bottom']}
          style={styles.content}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/placeholder.png')}
              style={styles.image}
              contentFit='cover'
            />
          </View>

          <View style={styles.promptContainer}>
            <View style={styles.promptHeader}>
              <CustomText
                variant='Bold'
                size={15}>
                { t('Result.Prompt') }
              </CustomText>
              <TouchableOpacity
                style={styles.copyButton}
                onPress={handleCopyPrompt}
                disabled={copied}
              >
                <CopyIcon />
                <CustomText
                  variant='Regular'
                  size={11}>
                  { copied ? t('Result.Copied') : t('Result.Copy') }
                </CustomText>
              </TouchableOpacity>
            </View>
            <CustomText
              variant='Regular'
              size={16}>
              { prompt || 'No prompt' }
            </CustomText>
            <View style={styles.styleContainer}>
              <CustomText
                variant='Regular'
                size={12}>
                { mockStyles.find((style) => style.id === selectedStyle)?.name || 'No style' }
              </CustomText>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Layout>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: '100%',
    height: 342,
    borderRadius: 16,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  promptContainer: {
    marginTop: 24,
    backgroundColor: Theme.colors.inputBackground,
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  promptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  styleContainer: {
    backgroundColor: Theme.colors.infoChip,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
  },
});
