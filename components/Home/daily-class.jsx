import { View, Text } from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';

const DailyClass = () => {
  return (
    <View style={tw`flex flex-row px-4 min-h-20`}>
      <View
        style={tw`flex-1 bg-yellow-200 mx-1 rounded-xl flex justify-center items-center shadow-lg`}
      >
        <Text>Saturday,</Text>
        <Text>7 Sept</Text>
      </View>
      <View
        style={tw`flex-2 bg-blue-50 mx-1 rounded-xl flex justify-center items-center shadow-lg`}
      >
        <View style={tw`my-3 flex flex-col justify-center items-start`}>
          <Text style={tw`text-sm`}>Algorithm</Text>
          <Text style={tw`text-xs`}>09:30 PM - 11:30 PM </Text>
          <Text style={tw`text-xs`}>Room: DN101 </Text>
        </View>
        <View style={tw`my-3 flex flex-col justify-center items-start`}>
          <Text style={tw`text-sm`}>Advanced Database</Text>
          <Text style={tw`text-xs`}>12:30 PM - 1:30 PM </Text>
          <Text style={tw`text-xs`}>Room: DN102 </Text>
        </View>
      </View>
    </View>
  );
};

export default DailyClass;
