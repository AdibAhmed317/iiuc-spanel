import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import HomeHeader from '../../../components/Home/HomeHeader';
import tw from '../../../lib/tailwind';

const Home = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={tw`flex-1`}>
        <HomeHeader />
        <View style={tw`flex flex-row justify-between`}>
          <View
            style={tw`h-40 flex-1 bg-pink-50 m-3 rounded-3xl flex justify-center items-center shadow-xl`}
          >
            <View style={tw`flex-1 flex justify-end items-center`}>
              <Text style={tw`text-xl font-light text-primaryBlue mx-1`}>
                Current CGPA
              </Text>
            </View>
            <View style={tw`flex-1 flex justify-center items-center`}>
              <Text style={tw`text-2xl font-light text-black/50`}>3.347</Text>
            </View>
          </View>
          <View
            style={tw`h-40 flex-1 bg-pink-100 m-3 rounded-3xl flex justify-center items-center shadow-xl`}
          >
            <View style={tw`flex-1 flex justify-end items-center`}>
              <Text style={tw`text-lg font-light text-primaryBlue mx-1`}>
                Outstanding Balance
              </Text>
            </View>
            <View style={tw`flex-1 flex justify-center items-center`}>
              <Text style={tw`text-2xl font-light text-black/50`}>-7.5</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;
