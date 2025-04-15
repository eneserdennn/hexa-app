import React from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';

import { CustomText } from '@/components';
import { images, Theme } from '@/constants';

const HomeScreen = () => {
  const { t } = useTranslation();
  const maxLength = 500;
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={images.backGradient}
          contentFit='fill'
          transition={1000}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <View style={styles.inputHeader}>
            <CustomText
              variant='ExtraBold'
              size={20}>
              { t('Home.PromptTitle') }
            </CustomText>
            <CustomText
              variant='Regular'
              size={14}>
              🎲
              { '  ' }
              { t('Home.SurpriseMe') }
            </CustomText>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              multiline={true}
              placeholderTextColor={Theme.colors.placeholder}
              placeholder={t('Home.PromptPlaceholder')}
              maxLength={maxLength}
              value={text}
              onChangeText={setText}
            />
            <View style={styles.characterCounter}>
              <CustomText
                variant='Regular'
                size={11}
                style={styles.counterText}>
                { text.length }
                /
                { maxLength }
              </CustomText>
            </View>
          </View>
        </View>

        <View style={styles.logoStyles}>
          <CustomText
            variant='ExtraBold'
            size={20}>
            { t('Home.LogoStyles') }
          </CustomText>

          { /* TODO: Add logo styles */ }
          <FlatList
            data={[]}
            renderItem={() => <View />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 24,
  },
  inputContainer: {
    gap: 12,
  },
  inputHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputWrapper: {
    position: 'relative',
    height: 175,
  },
  input: {
    height: 175,
    backgroundColor: Theme.colors.inputBackground,
    borderRadius: 16,
    padding: 12,
    color: Theme.colors.text,
    fontSize: 16,
  },
  characterCounter: {
    position: 'absolute',
    bottom: 8,
    left: 16,
  },
  counterText: {
    color: Theme.colors.placeholder,
  },
  logoStyles: {
    flex: 1,
    gap: 12,
  },
});
