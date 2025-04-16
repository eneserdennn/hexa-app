import React from 'react';
import { Stack } from 'expo-router';

import { CustomHeader } from '@/components';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='home'
        options={{ header: () => <CustomHeader title='AI Logo' /> }} />
      <Stack.Screen
        name='result'
        options={{
          header: () => (
            <CustomHeader
              title='Your Design'
              size='large'
              closeButton
            />
          ),
        }}
      />
    </Stack>
  );
};
