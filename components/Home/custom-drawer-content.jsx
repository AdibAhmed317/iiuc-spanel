import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { router } from 'expo-router';

import tw from '@lib/tailwind';
import DrawerMenuItem from './drawer-menu-item';
import { menuItems } from '@assets/data/btn-data';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={tw`flex-1 bg-white`}>
      <View style={tw`p-4 border-b border-gray-100`}>
        <Image
          source={require('@assets/images/icon.jpg')}
          style={tw`w-20 h-20 rounded-full mb-4`}
        />
        <Text style={tw`text-lg font-bold`}>Example Ahmed</Text>
        <Text style={tw`text-sm text-gray-600`}>example@mail.com</Text>
      </View>

      <ScrollView style={tw`flex-1`}>
        {menuItems.map((menu, index) => (
          <DrawerMenuItem
            key={index}
            title={menu.title}
            menuKey={menu.key}
            subItems={menu.subItems}
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={tw`p-4 border-t border-gray-100 pb-20`}
        onPress={() => router.push('/sign-in')}
      >
        <Text style={tw`text-red-500`}>Log Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
