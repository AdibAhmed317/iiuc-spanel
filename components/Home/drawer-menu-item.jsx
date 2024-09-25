import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import tw from '@lib/tailwind';

const DrawerMenuItem = ({ title, menuKey, subItems } = []) => {
  const [expandedMenus, setExpandedMenus] = useState({
    students: false,
    application: false,
    iqac: false,
    others: false,
    setting: false,
  });

  const toggleMenu = (menuKey) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [menuKey]: !prevState[menuKey],
    }));
  };

  return (
    <>
      <TouchableOpacity
        style={tw`p-4 border-b border-gray-100 flex-row justify-between items-center`}
        onPress={() => toggleMenu(menuKey)}
      >
        <Text style={tw`text-sm`}>{title}</Text>
        <AntDesign
          name={expandedMenus[menuKey] ? 'up' : 'down'}
          size={16}
          color='black'
        />
      </TouchableOpacity>
      {expandedMenus[menuKey] && (
        <View style={tw`pl-8`}>
          {subItems.length > 0 ? (
            subItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={tw`p-2`}
                onPress={() => router.push(item.route)}
              >
                <Text style={tw`text-xs`}>{item.label}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={tw`text-xs p-2 text-gray-500`}>
              No items available
            </Text>
          )}
        </View>
      )}
    </>
  );
};

export default DrawerMenuItem;
