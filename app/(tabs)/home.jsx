import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor='#313477' barStyle='light-content' />
      <View style={tw`flex-1`}>
        <Text>Home Content</Text>
      </View>
    </>
  );
};

export default Home;
