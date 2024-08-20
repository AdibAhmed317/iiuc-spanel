import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import tw from '../../lib/tailwind';
import { router } from 'expo-router';

const CustomDrawerContent = (props) => {
  const handleLogout = () => {
    router.push('/sign-in');
  };
  return (
    <DrawerContentScrollView {...props} style={tw`flex-1`}>
      <View style={tw`p-4 border-b border-gray-300`}>
        <Image
          source={require('../../assets/images/icon.jpg')} // Replace with your image path
          style={tw`w-20 h-20 rounded-full mb-4`}
        />
        <Text style={tw`text-lg font-bold`}>Example Ahmed</Text>
        <Text style={tw`text-sm text-gray-600`}>example@mail.com</Text>
      </View>
      <TouchableOpacity
        style={tw`p-4 border-t border-gray-300`}
        onPress={handleLogout}
      >
        <Text style={tw`text-red-500`}>Log Out</Text>
      </TouchableOpacity>
      {/* <View style={tw`flex-1`}>
        <DrawerItemList {...props} />
      </View> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
