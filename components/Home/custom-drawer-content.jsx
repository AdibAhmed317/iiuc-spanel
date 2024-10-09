// import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { DrawerContentScrollView } from '@react-navigation/drawer';
// import { router } from 'expo-router';

// import tw from '@lib/tailwind';
// import DrawerMenuItem from './drawer-menu-item';
// import { menuItems } from '@assets/data/btn-data';

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props} style={tw`flex-1 bg-white`}>
//       <View style={tw`p-4 border-b border-gray-100`}>
//         <Image
//           source={require('@assets/images/icon.jpg')}
//           style={tw`w-20 h-20 rounded-full mb-4`}
//         />
//         <Text style={tw`text-lg font-bold`}>Example Ahmed</Text>
//         <Text style={tw`text-sm text-gray-600`}>example@mail.com</Text>
//       </View>

//       <ScrollView style={tw`flex-1`}>
//         {menuItems.map((menu, index) => (
//           <DrawerMenuItem
//             key={index}
//             title={menu.title}
//             menuKey={menu.key}
//             subItems={menu.subItems}
//           />
//         ))}
//       </ScrollView>

//       <TouchableOpacity
//         style={tw`p-4 border-t border-gray-100 pb-20`}
//         onPress={() => router.push('/sign-in')}
//       >
//         <Text style={tw`text-red-500`}>Log Out</Text>
//       </TouchableOpacity>
//     </DrawerContentScrollView>
//   );
// };

// export default CustomDrawerContent;

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { router } from 'expo-router';

import tw from '@lib/tailwind';
import CustomButton from '@components/custom-button';
import DrawerMenuItem from '@components/home/drawer-menu-item';
import { menuItems } from '@assets/data/btn-data';

const CustomDrawerContent = (props) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleToggleMenu = (menuKey) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedMenu(expandedMenu === menuKey ? null : menuKey);
  };

  return (
    <DrawerContentScrollView {...props} style={tw`flex-1 bg-white`}>
      <View style={tw`p-6 mb-4`}>
        <View style={tw`flex-row items-center`}>
          <Image
            source={require('@assets/images/icon.jpg')}
            style={tw`w-16 h-16 rounded-full`}
          />
          <View style={tw`ml-4`}>
            <Text style={tw`text-lg font-medium text-gray-800`}>
              Example Ahmed
            </Text>
            <Text style={tw`text-sm text-gray-500`}>example@mail.com</Text>
          </View>
        </View>
      </View>

      {/* Menu Items */}
      <ScrollView style={tw`flex-1 px-4`}>
        {menuItems.map((menu, index) => (
          <DrawerMenuItem
            key={index}
            title={menu.title}
            subItems={menu.subItems}
            isExpanded={expandedMenu === menu.key} // Check if this menu is expanded
            onToggleExpand={() => handleToggleMenu(menu.key)} // Handle expansion/collapse
          />
        ))}
      </ScrollView>

      {/* Logout Button */}
      <View style={tw`px-6 py-4 mt-auto`}>
        <CustomButton
          title='LOG OUT'
          containerStyles='bg-red-500 rounded-lg p-3 flex-row justify-center items-center shadow-sm'
          handlePress={() => router.replace('/sign-in')}
          textStyles='text-white'
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
