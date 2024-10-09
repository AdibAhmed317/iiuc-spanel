import { View, Text, FlatList, ScrollView } from 'react-native';

import CustomButton from '@components/custom-button';
import tw from '@lib/tailwind';
import { registrationSummary } from '@assets/data/dummyData';

const RegistrationSummary = () => {
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
        Semester
      </Text>
      <Text
        style={tw`w-40 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Erolled
      </Text>
      <Text
        style={tw`w-20 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Total CH
      </Text>
      <Text
        style={tw`w-20 p-2 text-center font-semibold border-r border-gray-200`}
      >
        URC
      </Text>
      <Text
        style={tw`w-20 p-2 text-center font-semibold border-r border-gray-200`}
      >
        DC
      </Text>
      <Text
        style={tw`w-28 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Cost
      </Text>
      <Text
        style={tw`w-28 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Payment
      </Text>
      <Text
        style={tw`w-24 p-2 text-center font-semibold border-r border-gray-200`}
      >
        GPA
      </Text>
      <Text
        style={tw`w-24 p-2 text-center font-semibold border-r border-gray-200`}
      >
        CGPA
      </Text>
      <Text style={tw`w-80 p-2 text-center font-semibold`}>Action</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={tw`flex flex-row border-b border-gray-200 `}>
      <Text style={tw`w-12 p-2 text-center border-r border-gray-200`}>
        {item.sl}
      </Text>
      <Text style={tw`w-32 p-2 text-center border-r border-gray-200`}>
        {item.semester}
      </Text>
      <Text style={tw`w-40 p-2 text-center border-r border-gray-200`}>
        {item.erolled}
      </Text>
      <Text style={tw`w-20 p-2 text-center border-r border-gray-200`}>
        {item.totalCH}
      </Text>
      <Text style={tw`w-20 p-2 text-center border-r border-gray-200`}>
        {item.urc}
      </Text>
      <Text style={tw`w-20 p-2 text-center border-r border-gray-200`}>
        {item.dc}
      </Text>
      <Text style={tw`w-28 p-2 text-center border-r border-gray-200`}>
        {item.cost}
      </Text>
      <Text style={tw`w-28 p-2 text-center border-r border-gray-200`}>
        {item.payment}
      </Text>
      <Text style={tw`w-24 p-2 text-center border-r border-gray-200`}>
        {item.gpa}
      </Text>
      <Text style={tw`w-24 p-2 text-center border-r border-gray-200`}>
        {item.cgpa}
      </Text>
      <View
        style={tw`w-80 p-2 flex-row flex-wrap justify-center items-center flex`}
      >
        <CustomButton
          title='Print Registration'
          containerStyles='bg-green-50 border border-gray-300 rounded-lg p-1 m-1 shadow-md'
          textStyles='text-primaryGreen font-medium text-xs'
        />
        <CustomButton
          title='Payment Advising'
          containerStyles='bg-blue-50 border border-gray-300 rounded-lg p-1 m-1 shadow-md'
          textStyles='text-primaryBlue font-medium text-xs'
        />
        <CustomButton
          title='Mid Admit Card'
          containerStyles='bg-red-50 border border-gray-300 rounded-lg p-1 m-1 shadow-md'
          textStyles='text-red-950 font-medium text-xs'
        />
        <CustomButton
          title='Final Admit Card'
          containerStyles='bg-yellow-50 border border-gray-300 rounded-lg p-1 m-1 shadow-md'
          textStyles='text-yellow-900 font-medium text-xs'
        />
        <CustomButton
          title='Grade Sheet'
          containerStyles='bg-gray-50 border border-gray-300 rounded-lg p-1 m-1 shadow-md'
          textStyles='text-black/60 font-medium text-xs'
        />
        <CustomButton
          title='Mid Exam Routine'
          containerStyles='bg-lime-50 border border-gray-300 rounded-lg p-1 m-1 shadow-md'
          textStyles='text-primaryGreen font-medium text-xs'
        />
        <CustomButton
          title='Final Exam Routine'
          containerStyles='bg-orange-50 border border-gray-300 rounded-lg p-1 m-1 shadow-md'
          textStyles='text-red-900 font-medium text-xs'
        />
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView horizontal>
        <View style={tw`w-full mt-10`}>
          <FlatList
            data={registrationSummary}
            renderItem={renderItem}
            keyExtractor={(item) => item.sl}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={tw`mt-5 mb-80 pb-80`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegistrationSummary;
