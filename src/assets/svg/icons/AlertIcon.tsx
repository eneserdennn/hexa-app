import React from 'react';
import Svg, { Path } from 'react-native-svg';

type AlertIconProps = {
  width?: number;
  height?: number;
};

const AlertIcon = ({ width = 32, height = 32 }: AlertIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.667 16C1.667 8.084 8.084 1.667 16 1.667S30.333 8.084 30.333 16 23.916 30.333 16 30.333 1.667 23.916 1.667 16zm13 5.333A1.33 1.33 0 0115.994 20h.012a1.33 1.33 0 011.327 1.333 1.33 1.33 0 01-1.327 1.334h-.012a1.33 1.33 0 01-1.327-1.334zm0-5.333a1.333 1.333 0 002.666 0v-5.333a1.333 1.333 0 10-2.666 0V16z'
        fill='#FAFAFA'
      />
    </Svg>
  );
};

export default AlertIcon;
