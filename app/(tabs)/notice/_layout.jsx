import { Stack } from 'expo-router';

const NoticeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='(top-tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='notice-details'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default NoticeLayout;
