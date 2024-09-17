import { View, Text, ScrollView } from 'react-native';

import tw from '../../../lib/tailwind';

const Contact = () => {
  return (
    <View style={tw`px-4 bg-white h-full`}>
      <ScrollView style={tw`mt-4 w-full`}>
        <View style={tw`w-full border border-gray-200 rounded`}>
          <View style={tw`flex flex-row border-b border-gray-200`}>
            <Text
              style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
            >
              Present Address
            </Text>
            <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
              Local
            </Text>
          </View>

          <View style={tw`flex flex-row border-b border-gray-200`}>
            <Text
              style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
            >
              Permanent Address
            </Text>
            <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
              Local
            </Text>
          </View>

          <View style={tw`flex flex-row border-b border-gray-200`}>
            <Text
              style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
            >
              Mobile Number
            </Text>
            <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
              0123123123
            </Text>
          </View>

          <View style={tw`flex flex-row border-b border-gray-200`}>
            <Text
              style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
            >
              Alternative Number
            </Text>
            <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
              0123123123
            </Text>
          </View>

          <View style={tw`flex flex-row border-b border-gray-200`}>
            <Text
              style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
            >
              Email
            </Text>
            <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
              ex@mail.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Contact;
