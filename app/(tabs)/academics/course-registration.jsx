import { View, Text, FlatList, ScrollView } from 'react-native';

import CustomButton from '@components/custom-button';
import tw from '@lib/tailwind';
import { courses } from '@assets/data/syllabus';
import { courseRegistration } from '@assets/data/dummyData';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const CourseRegistration = () => {
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
    <View style={tw`px-4 py-14 bg-white`}>
      <TouchableOpacity
        style={tw`mb-3`}
        onPress={() => router.push('/academics')}
      >
        <View style={tw`flex flex-row justify-start items-center`}>
          <Ionicons name='chevron-back-outline' size={24} color='#313477' />
          <Text style={tw`text-primaryBlue`}>Go Back</Text>
        </View>
      </TouchableOpacity>
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
          <Text style={tw`font-bold`}>Semester Name: </Text>
          <Text>Autumn-2024</Text>
        </Text>
        <Text>
          <Text style={tw`font-bold`}>Registration No: </Text>
          <Text>0062110005101055</Text>
        </Text>
        <Text>
          <Text style={tw`font-bold`}>GPA: 1.954 and Max CH: </Text>
          <Text>
            Regular: 15, Additional:0 and Retake: 2 Course (Max 6 Credit)
          </Text>
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
          <Text style={tw`font-bold`}>Semester Number: </Text>
          <Text>Eighth Semester</Text>
        </Text>
        <Text>
          <Text style={tw`font-bold`}>First Installment: </Text>
          <Text> 0, Payment Not Clear</Text>
        </Text>
      </View>
      <ScrollView horizontal>
        <View style={tw`w-full`}>
          <FlatList
            data={courseRegistration}
            renderItem={renderItem}
            keyExtractor={(item) => item.sl}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={tw`mt-5 mb-80 w-full pb-80`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CourseRegistration;
