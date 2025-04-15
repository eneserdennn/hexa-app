// eslint-disable-next-line no-restricted-imports
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type EmptyIconProps = {
  width?: number;
  height?: number;
};

const EmptyIcon = ({ width = 40, height = 40 }: EmptyIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 40 40'
      fill='none'

    >
      <Path
        d='M20 36.667c9.2 0 16.667-7.467 16.667-16.667C36.667 10.8 29.2 3.333 20 3.333 10.8 3.333 3.333 10.8 3.333 20c0 9.2 7.467 16.667 16.667 16.667zM31.5 8.333L8.167 31.667'
        stroke='#FAFAFA'
        strokeWidth={2.7}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default EmptyIcon;
