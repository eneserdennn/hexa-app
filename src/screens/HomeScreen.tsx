import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  BackgroundImage,
  CustomButton,
  CustomText,
  StyleItem,
} from '@/components';
import { mockStyles, Theme } from '@/constants';

const HomeScreen = () => {
  const { t } = useTranslation();
  const maxLength = 500;
  const [text, setText] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<number | null>(0);

  return (
    <View style={styles.container}>
      <BackgroundImage />
      <SafeAreaView
        edges={['bottom']}
        style={styles.content}
      >
        <View style={styles.promptContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.inputHeader}>
              <CustomText
                variant='ExtraBold'
                size={20}>
                { t('Home.PromptTitle') }
              </CustomText>

              <TouchableOpacity
                // TODO: Add action
                onPress={() => {}}>
                <CustomText
                  variant='Regular'
                  size={14}>
                  🎲
                  { '  ' }
                  { t('Home.SurpriseMe') }
                </CustomText>
              </TouchableOpacity>
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
            <View style={styles.logoStylesHeader}>
              <CustomText
                variant='ExtraBold'
                size={20}>
                { t('Home.LogoStyles') }
              </CustomText>
            </View>

            <FlatList
              data={mockStyles}
              renderItem={({ item }) => (
                <StyleItem
                  item={item}
                  isSelected={selectedStyle === item.id}
                  onPress={() => setSelectedStyle(item.id)}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.logoStylesContainer}
            />

          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            text='Create'
            // TODO: Add action
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  promptContainer: {
    gap: 24,
  },
  inputContainer: {
    gap: 12,
    paddingHorizontal: 24,
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
    gap: 12,
  },
  logoStylesHeader: {
    paddingHorizontal: 24,
  },
  logoStylesContainer: {
    gap: 12,
    marginLeft: 24,
  },
  buttonContainer: {
    paddingHorizontal: 24,
  },
});
