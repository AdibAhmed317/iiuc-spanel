import { View, Text } from 'react-native';

import tw from '@lib/tailwind';

const PaymentHistory = () => {
  const headerComponent = () => (
    <View style={tw`flex flex-row border-b border-gray-200`}>
      <Text
        style={tw`w-12 p-2 text-center font-semibold border-r border-gray-200`}
      >
        SL
      </Text>
      <Text
        style={tw`w-32 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Course Code
      </Text>
      <Text
        style={tw`w-40 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Course Name
      </Text>
      <Text
        style={tw`w-20 p-2 text-center font-semibold border-r border-gray-200`}
      >
        C. H.
      </Text>
      <Text
        style={tw`w-20 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Section
      </Text>
      <Text
        style={tw`w-20 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Sub Section
      </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={tw`flex flex-row border-b border-gray-200 `}>
      <Text style={tw`w-12 p-2 text-center border-r border-gray-200`}>
        {item.sl}
      </Text>
      <Text style={tw`w-32 p-2 text-center border-r border-gray-200`}>
        {item.courseCode}
      </Text>
      <Text style={tw`w-40 p-2 text-center border-r border-gray-200`}>
        {item.courseName}
      </Text>
      <Text style={tw`w-20 p-2 text-center border-r border-gray-200`}>
        {item.ch}
      </Text>
      <Text style={tw`w-20 p-2 text-center border-r border-gray-200`}>
        {item.section}
      </Text>
      <Text style={tw`w-20 p-2 text-center border-r border-gray-200`}>
        {item.subSection}
      </Text>
    </View>
  );

  return (
    <View style={tw`px-4 bg-white pt-10 flex-1`}>
      <View style={tw`bg-blue-50 p-2 rounded-xl`}>
        <Text>
          <Text style={tw`font-bold`}>Matric No: </Text>
          <Text>C123123</Text>
        </Text>
        <Text>
          <Text style={tw`font-bold`}>Name: </Text>
          <Text>Example Ahmed</Text>
        </Text>
        <Text>
          <Text style={tw`font-bold`}>Registration No: </Text>
          <Text>0062110005101055</Text>
        </Text>
      </View>
      <View style={tw`mt-5 mb-2 bg-blue-50 p-2 rounded-xl`}>
        <Text>
          <Text style={tw`font-bold`}>Department: </Text>
          <Text>Computer Science and Engineering</Text>
        </Text>
        <Text>
          <Text style={tw`font-bold`}>Programm: </Text>
          <Text>Bachelor Program</Text>
        </Text>

        <Text>
          <Text style={tw`font-bold`}>Admission: </Text>
          <Text> Spring-2021</Text>
        </Text>
      </View>
      <Text>PaymentHistory</Text>
    </View>
  );
};

export default PaymentHistory;
