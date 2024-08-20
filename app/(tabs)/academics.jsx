import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Academics = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <View>
          <Text>academics</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Academics;
