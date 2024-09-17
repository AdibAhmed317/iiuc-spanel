import { View, Text, Image, ScrollView } from 'react-native';

import tw from '../../../lib/tailwind';

import avatar from '../../../assets/images/icon.jpg';

const Overview = () => {
  return (
    <View style={tw`px-4 bg-white h-full`}>
      <View style={tw`flex justify-center items-center mt-5`}>
        <Image
          style={tw`h-48 w-48 rounded-full`}
          source={avatar}
          resizeMode='stretch'
        />
        <View style={tw`flex flex-row justify-between my-5`}>
          <Text style={tw`text-primaryBlue mx-2`}>
            ID Number: <Text style={tw`text-black`}>C123123</Text>
          </Text>
          <Text style={tw`text-primaryBlue mx-2`}>
            Reg. Number: <Text style={tw`text-black`}>1231245101032</Text>
          </Text>
        </View>
        <ScrollView style={tw`mt-4 w-full`}>
          <View style={tw`w-full border border-gray-200 rounded`}>
            <View style={tw`flex flex-row border-b border-gray-200`}>
              <Text
                style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
              >
                Name
              </Text>
              <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
                New user
              </Text>
            </View>

            <View style={tw`flex flex-row border-b border-gray-200`}>
              <Text
                style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
              >
                Date of Birth
              </Text>
              <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
                00/00/0000
              </Text>
            </View>

            <View style={tw`flex flex-row border-b border-gray-200`}>
              <Text
                style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
              >
                Father Name
              </Text>
              <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
                New user
              </Text>
            </View>

            <View style={tw`flex flex-row border-b border-gray-200`}>
              <Text
                style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
              >
                Mother Name
              </Text>
              <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
                New user
              </Text>
            </View>

            <View style={tw`flex flex-row border-b border-gray-200`}>
              <Text
                style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
              >
                Religion
              </Text>
              <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
                Islam
              </Text>
            </View>

            <View style={tw`flex flex-row border-b border-gray-200`}>
              <Text
                style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
              >
                Gender
              </Text>
              <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
                Male
              </Text>
            </View>

            <View style={tw`flex flex-row border-b border-gray-200`}>
              <Text
                style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
              >
                Nationality
              </Text>
              <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
                Bangladeshi
              </Text>
            </View>

            <View style={tw`flex flex-row border-b border-gray-200`}>
              <Text
                style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
              >
                Department
              </Text>
              <Text style={tw`flex-1 p-2 text-center border-gray-200`}>
                CSE
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Overview;
