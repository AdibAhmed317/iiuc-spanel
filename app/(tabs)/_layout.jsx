import React from 'react';
import {
  FontAwesome,
  Foundation,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text, View, Platform } from 'react-native';
import tw from '../../lib/tailwind';

const TabsLayout = () => {
  const tabBarHeight = Platform.OS === 'ios' ? 90 : 60;

  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarStyle: {
            display: 'flex',
            height: tabBarHeight,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: '#313477',
            position: 'absolute',
            elevation: 0,
            shadowOpacity: 0,
            borderTopWidth: 0,
            paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          },
          tabBarActiveTintColor: '#c6c6d6',
          tabBarInactiveTintColor: '#636b80',
          tabBarIcon: ({ color }) => {
            let iconName;
            let label;

            if (route.name === 'home') {
              iconName = 'home';
              label = 'Home';
              return (
                <View style={tw`items-center`}>
                  <FontAwesome name={iconName} size={24} color={color} />
                  <Text style={{ color, fontSize: 8 }}>{label}</Text>
                </View>
              );
            } else if (route.name === 'academics') {
              iconName = 'results';
              label = 'Academics';
              return (
                <View style={tw`items-center`}>
                  <Foundation name={iconName} size={24} color={color} />
                  <Text style={{ color, fontSize: 8 }}>{label}</Text>
                </View>
              );
            } else if (route.name === 'profile') {
              iconName = 'user';
              label = 'Profile';
              return (
                <View style={tw`items-center`}>
                  <AntDesign name={iconName} size={24} color={color} />
                  <Text style={{ color, fontSize: 8 }}>{label}</Text>
                </View>
              );
            } else if (route.name === 'notice') {
              iconName = 'notifications-outline';
              label = 'Notice';
              return (
                <View style={tw`items-center`}>
                  <Ionicons name={iconName} size={24} color={color} />
                  <Text style={{ color, fontSize: 8 }}>{label}</Text>
                </View>
              );
            }
          },
          tabBarLabel: () => null,
        })}
      >
        <Tabs.Screen
          name='home'
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name='academics'
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name='notice'
          options={{
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
