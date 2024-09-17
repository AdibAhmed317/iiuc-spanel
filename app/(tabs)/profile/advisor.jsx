import { View, Text } from 'react-native';

import tw from '@lib/tailwind';

const Advisor = () => {
  return (
    <View style={tw`flex-1 px-4 justify-center items-center bg-white`}>
      <View
        style={tw`relative h-[45%] w-full max-w-[20rem] bg-white rounded-2xl overflow-hidden shadow-lg`}
      >
        <View style={tw`relative pt-16 px-8`}>
          <Text style={tw`text-3xl font-bold text-gray-800 mb-2`}>
            Dr. Example Ahmed
          </Text>
          <Text style={tw`text-xl font-semibold text-gray-600 mb-2`}>
            Associate Professor
          </Text>
          <Text style={tw`text-lg text-gray-700 mb-4`}>
            Computer Science and Engineering
          </Text>
          <Text style={tw`text-lg text-gray-600 mb-2`}>018123123123</Text>
          <Text style={tw`text-lg text-blue-600`}>example@mail.com</Text>
        </View>
      </View>
    </View>
  );
};

export default Advisor;
