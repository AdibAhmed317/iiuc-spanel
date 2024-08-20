import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import tw from '../lib/tailwind';
import bg from '../assets/images/icon.jpg';

const HomeHeader = () => {
  return (
    <>
      <View
        style={tw`flex-row items-center justify-between p-4 bg-primaryBlue pt-20 rounded-b-md`}
      >
        <View style={tw`flex flex-row justify-center items-center`}>
          <Image source={bg} style={tw`h-10 w-10 rounded-full`} />
          <View style={tw`mx-3`}>
            <Text style={tw`text-sm text-white`}>Hello, </Text>
            <Text style={tw`text-xl text-white`}>Example </Text>
          </View>
        </View>
        <TouchableOpacity>
          <AntDesign name='menufold' color='white' size={20} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeHeader;
