import { View, Text, FlatList } from 'react-native';

import tw from '@lib/tailwind';

import { courses } from '@assets/data/syllabus';

const Syllabus = () => {
  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={tw`flex flex-row border-b border-gray-200`}>
      <Text style={tw`flex-1 p-2 text-center border-r border-gray-200`}>
        {item.sl}
      </Text>
      <Text style={tw`flex-1 p-2 text-center border-r border-gray-200`}>
        {item.code}
      </Text>
      <Text style={tw`flex-3 p-2 text-center border-r border-gray-200`}>
        {item.title}
      </Text>
      <Text style={tw`flex-1 p-2 text-center border-r border-gray-200`}>
        {item.ch}
      </Text>
      <Text style={tw`flex-1 p-2 text-center border-r border-gray-200`}>
        {item.semester}
      </Text>
      <Text style={tw`flex-1 p-2 text-center`}>{item.prereq}</Text>
    </View>
  );

  // Header component for FlatList
  const headerComponent = () => (
    <View style={tw`flex flex-row border-b border-gray-200`}>
      <Text
        style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
      >
        SL
      </Text>
      <Text
        style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Course Code
      </Text>
      <Text
        style={tw`flex-3 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Course Title
      </Text>
      <Text
        style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
      >
        C.H
      </Text>
      <Text
        style={tw`flex-1 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Semester
      </Text>
      <Text style={tw`flex-1 p-2 text-center font-semibold`}>Pre. R</Text>
    </View>
  );

  return (
    <View style={tw`px-4 bg-white`}>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.sl}
        ListHeaderComponent={headerComponent}
        contentContainerStyle={tw`mt-4 w-full pb-20`}
      />
    </View>
  );
};

export default Syllabus;
