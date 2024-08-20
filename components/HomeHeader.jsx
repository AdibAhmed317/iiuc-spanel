import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import tw from '../lib/tailwind';

const HomeHeader = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor='#313477' barStyle='light-content' />
        <View
          style={tw`flex-row items-center justify-between p-4 bg-primaryBlue`}
        >
          <TouchableOpacity>
            <AntDesign name='menuunfold' color='white' size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='settings-outline' color='white' size={35} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeHeader;
