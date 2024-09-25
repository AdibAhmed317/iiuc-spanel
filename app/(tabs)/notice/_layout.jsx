import { View, Text, StatusBar, Platform } from 'react-native';
import React from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Notice from '@app/(tabs)/notice/index';
import TransportNotice from './transport-notice';

const Tab = createMaterialTopTabNavigator();

const NoticeLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View
          style={{
            flex: 1,
            marginTop: Platform.OS === 'android' ? insets.top : 0,
          }}
        >
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                height: 40,
                backgroundColor: '#313477',
                borderRadius: 8,
                margin: 10,
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: '#ffffff',
              tabBarIndicatorStyle: {
                backgroundColor: '#ffffff',
                height: '100%',
                borderRadius: 5,
              },
              tabBarItemStyle: {
                borderRadius: 8,
                overflow: 'hidden',
              },
              tabBarLabelStyle: {
                textTransform: 'none',
              },
              tabBarContentContainerStyle: {
                alignItems: 'center',
                justifyContent: 'center',
              },
            }}
          >
            <Tab.Screen name='University Notices' component={Notice} />
            <Tab.Screen name='Transport Notices' component={TransportNotice} />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </>
  );
};

export default NoticeLayout;
