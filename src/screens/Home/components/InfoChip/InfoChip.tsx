import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { AlertIcon } from '@/assets';
import { CustomText, LoadingIndicator } from '@/components';
import { Theme } from '@/constants';
import { useLogoStore } from '@/store';

type InfoChipProps = {
  status: 'loading' | 'success' | 'error';
};

const InfoChip = ({ status }: InfoChipProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { resultImageUrl } = useLogoStore();

  const renderLeftContent = () => {
    switch (status) {
    case 'loading':
      return (
        <View style={[styles.imageContainer, { backgroundColor: Theme.colors.infoChipBackground }]}>
          <LoadingIndicator
            size='small'
            color={Theme.colors.white}
          />
        </View>
      );
    case 'error':
      return (
        <View style={[styles.imageContainer, { backgroundColor: Theme.colors.errorLight }]}>
          <AlertIcon />
        </View>
      );
    case 'success':
      return (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: resultImageUrl }}
            style={styles.image}
            contentFit='fill'
            placeholder={require('@/assets/images/placeholder.png')}
          />
        </View>
      );
    default:
      return null;
    }
  };

  const renderRightContent = () => {
    switch (status) {
    case 'loading':
      return (
        <>
          <CustomText
            variant='ExtraBold'
            size={16}>
            { t('Home.Creating') }
          </CustomText>
          <CustomText
            variant='Regular'
            style={{ color: Theme.colors.placeholder }}
            size={13}
          >
            { t('Home.CreatingDescription') }
          </CustomText>
        </>
      );
    case 'error':
      return (
        <>
          <CustomText
            variant='ExtraBold'
            size={16}>
            { t('Home.ErrorCreating') }
          </CustomText>
          <CustomText
            variant='Regular'
            style={{ color: Theme.colors.placeholderLight }}
            size={13}
          >
            { t('Home.TryAgain') }
          </CustomText>
        </>
      );
    case 'success':
      return (
        <TouchableOpacity
          onPress={() => router.push('/result')}
        >
          <CustomText
            variant='ExtraBold'
            size={16}>
            { t('Home.LogoCreated') }
          </CustomText>
          <CustomText
            variant='Regular'
            style={{ color: Theme.colors.placeholderLight }}
            size={13}
          >
            { t('Home.TapToSee') }
          </CustomText>
        </TouchableOpacity>
      );
    default:
      return null;
    }
  };

  const getContainerStyle = (): ViewStyle => {
    switch (status) {
    case 'loading':
      return { backgroundColor: Theme.colors.inputBackground };
    case 'error':
      return { backgroundColor: Theme.colors.error };
    default:
      return {};
    }
  };

  if (status === 'success') {
    return (
      <LinearGradient
        colors={Theme.colors.buttonGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <View style={styles.leftContainer}>
          { renderLeftContent() }
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.textContainer}>
            { renderRightContent() }
          </View>
        </View>
      </LinearGradient>
    );
  }

  return (
    <View style={[styles.container, getContainerStyle()]}>
      <View style={styles.leftContainer}>
        { renderLeftContent() }
      </View>
      <TouchableOpacity
        style={styles.rightContainer}
        disabled={status !== 'error'}
        onPress={() => {}}>
        <View style={styles.textContainer}>
          { renderRightContent() }
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InfoChip;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  rightContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  textContainer: {
    gap: 2,
  },
});
