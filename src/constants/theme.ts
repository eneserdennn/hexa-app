import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Theme = {
  colors: {
    background: '#09090B',
    text: '#FAFAFA',
    white: '#FFFFFF',
    secondaryColor: '#A96CFF',
    tertiaryColor: '#386BFF',
    inputBackground: '#27272A',
    placeholder: '#71717A',
    placeholderBackground: '#282b56',
    buttonGradient: ['#2938DC', '#943DFF'],
    infoChipBackground: '#18181B',
    errorLight: '#f37c7c',
    error: '#EF4444',
    placeholderLight: '#D4D4D8',
    infoChip: '#3e3d48',
  },
  sizes: {
    width: width,
    height: height,
  },

} as const;
