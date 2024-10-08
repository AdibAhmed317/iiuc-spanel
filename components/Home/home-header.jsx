import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { useNavigation } from 'expo-router';

import tw from '@lib/tailwind';

import AntDesign from '@expo/vector-icons/AntDesign';

import bg from '@assets/images/icon.jpg';

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={[
          tw`flex-row items-center justify-between p-4 bg-primaryBlue`,
          { paddingTop: Platform.OS === 'android' ? 40 : 70 },
        ]}
      >
        <View style={tw`flex flex-row justify-center items-center`}>
          <Image source={bg} style={tw`h-10 w-10 rounded-full`} />
          <View style={tw`mx-3`}>
            <Text style={tw`text-sm text-white`}>Hello, </Text>
            <Text style={tw`text-xl text-white`}>Example </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <AntDesign name='menufold' color='white' size={20} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeHeader;
