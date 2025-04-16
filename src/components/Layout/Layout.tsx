import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      { children }
    </TouchableWithoutFeedback>
  );
};

export default Layout;
