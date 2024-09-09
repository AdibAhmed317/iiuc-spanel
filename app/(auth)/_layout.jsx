import { StatusBar } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Stack>
        <Stack.Screen name='sign-in' options={{ headerShown: false }} />
        <Stack.Screen name='verification' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;
