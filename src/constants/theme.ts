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
  },
  sizes: {
    width: width,
    height: height,
  },

} as const;
