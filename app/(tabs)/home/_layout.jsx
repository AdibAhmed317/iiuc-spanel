import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'react-native';
import CustomDrawerContent from '../../../components/Home/CustomDrawerContent';

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
            drawerLabel: 'Home',
          }}
        />
      </Drawer>
    </>
  );
};

export default DashboardLayout;
