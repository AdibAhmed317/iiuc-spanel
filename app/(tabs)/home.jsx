import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import HomeHeader from '../../components/HomeHeader';

const Home = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={tw`flex-1`}>
        <HomeHeader />
      </View>
    </>
  );
};

export default Home;
