/* eslint-disable no-restricted-imports */
import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

type LoadingProps = ActivityIndicatorProps;

const LoadingIndicator: React.FC<LoadingProps> = (props) => {
  return <ActivityIndicator {...props} />;
};

export default LoadingIndicator ;
