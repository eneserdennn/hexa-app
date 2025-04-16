import React from 'react';
import Svg, { Path } from 'react-native-svg';

type CopyIconProps = {
  width?: number;
  height?: number;
}

const CopyIcon = ({ width = 16, height = 16 }: CopyIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'

    >
      <Path
        d='M10.667 8.6v2.8c0 2.333-.934 3.267-3.267 3.267H4.6c-2.333 0-3.267-.934-3.267-3.267V8.6c0-2.333.934-3.267 3.267-3.267h2.8c2.333 0 3.267.934 3.267 3.267z'
        stroke='#A1A1AA'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.667 4.6v2.8c0 2.333-.934 3.267-3.267 3.267h-.733V8.6c0-2.333-.934-3.267-3.267-3.267H5.333V4.6c0-2.333.934-3.267 3.267-3.267h2.8c2.333 0 3.267.934 3.267 3.267z'
        stroke='#A1A1AA'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default CopyIcon;
