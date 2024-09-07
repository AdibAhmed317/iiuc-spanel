import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import tw from '../../lib/tailwind';
import { router } from 'expo-router';

const CustomDrawerContent = (props) => {
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

  const renderMenuItem = (title, menuKey, subItems = []) => (
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
              <TouchableOpacity key={index} style={tw`p-2`}>
                <Text style={tw`text-xs`}>{item}</Text>
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

  return (
    <DrawerContentScrollView {...props} style={tw`flex-1 bg-white`}>
      {/* Profile Header */}
      <View style={tw`p-4 border-b border-gray-100`}>
        <Image
          source={require('../../assets/images/icon.jpg')}
          style={tw`w-20 h-20 rounded-full mb-4`}
        />
        <Text style={tw`text-lg font-bold`}>Example Ahmed</Text>
        <Text style={tw`text-sm text-gray-600`}>example@mail.com</Text>
      </View>

      {/* Menu Items */}
      <ScrollView style={tw`flex-1`}>
        {renderMenuItem('Students', 'students', [
          'Payment History',
          'Print Course Registration',
          'Students Result View',
          'Registration Summary',
          'Course Status',
          'MDP Result View',
        ])}
        {renderMenuItem('Application', 'application', ['Clearance Form'])}
        {renderMenuItem('IQAC', 'iqac', ['Alumni Survey'])}
        {renderMenuItem('Others', 'others', [
          'Complain Box',
          'Recent Complain',
        ])}
        {renderMenuItem('Setting', 'setting', [
          'Update Profile',
          'Change Password',
        ])}
      </ScrollView>

      {/* Logout Button */}
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
