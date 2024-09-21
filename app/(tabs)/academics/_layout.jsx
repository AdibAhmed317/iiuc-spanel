import { StatusBar } from 'react-native';
import { Stack } from 'expo-router';

const AcademicsLayout = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen
          name='course-registration'
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default AcademicsLayout;
