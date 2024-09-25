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
        <Stack.Screen
          name='registration-summary'
          options={{ headerShown: false }}
        />
        <Stack.Screen name='ter' options={{ headerShown: false }} />
        <Stack.Screen name='add-drop' options={{ headerShown: false }} />
        <Stack.Screen name='course-status' options={{ headerShown: false }} />
        <Stack.Screen name='withdraw' options={{ headerShown: false }} />
        <Stack.Screen name='result-view' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AcademicsLayout;
