import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Theme = {
  colors: {
    background: '#09090B',
    text: '#FAFAFA',
  },
  sizes: {
    width: width,
    height: height,
  },

} as const;
