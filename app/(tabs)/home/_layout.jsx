import { StatusBar } from 'react-native';
import { Drawer } from 'expo-router/drawer';

import CustomDrawerContent from '@components/home/custom-drawer-content';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DashboardLayout = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            width: 300,
          },
          drawerActiveBackgroundColor: '#ffff',
          drawerPosition: 'right',
        }}
      >
        <Drawer.Screen
          name='index'
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name='payment-history'
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name='payment-slip'
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name='password'
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name='submit-thesis-project-proposal'
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name='submit-supervisor-thesis-project'
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name='siblings'
          options={{
            headerShown: false,
          }}
        />
      </Drawer>
    </>
  );
};

export default DashboardLayout;
