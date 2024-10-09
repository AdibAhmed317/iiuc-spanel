import { View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import CustomButton from '@components/custom-button';
import CourseCard from '@components/academics/course-card';
import tw from '@lib/tailwind';
import { courseRegistrationOption } from '@assets/data/btn-data';
import { demoCurrentCourse } from '@assets/data/dummyData';

const Academics = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={tw`bg-white flex-1`}>
        <ScrollView style={tw`mb-10 px-4`}>
          <View>
            <Text style={tw`text-xl my-5 font-normal`}>Registration</Text>
            <View style={tw`flex flex-wrap flex-row justify-center`}>
              {courseRegistrationOption.map((item, key) => (
                <CustomButton
                  key={key}
                  title={item.title}
                  containerStyles='bg-green-50 border border-gray-300 rounded-lg px-4 py-2 m-1 shadow-md h-[50px]'
                  textStyles='text-primaryGreen font-semibold text-xs'
                  handlePress={() => router.push(`${item.route}`)}
                />
              ))}
            </View>
          </View>
          <View style={tw`mb-10`}>
            <Text style={tw`text-xl my-5 font-normal`}>Current Courses</Text>
            <View>
              {demoCurrentCourse.map((item, key) => (
                <CourseCard
                  key={key}
                  courseName={item.courseName}
                  courseCode={item.courseCode}
                  creditHour={item.creditHour}
                  section={item.section}
                  subSection={item.subSection}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Academics;

{
  /* <View style={tw`mb-6`}>
            <Text style={tw`text-xl my-5 font-normal`}>Class Schedule</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={tw`bg-yellow-200 p-4 mr-4 rounded-lg`}>
                <Text style={tw`text-base font-bold`}>Mon</Text>
                <Text style={tw`text-sm text-gray-600`}>
                  09:30 AM - 11:30 AM
                </Text>
                <Text style={tw`text-sm text-gray-600`}>Room: DN101</Text>
              </View>

              <View style={tw`bg-yellow-200 p-4 mr-4 rounded-lg`}>
                <Text style={tw`text-base font-bold`}>Tue</Text>
                <Text style={tw`text-sm text-gray-600`}>
                  12:30 PM - 1:30 PM
                </Text>
                <Text style={tw`text-sm text-gray-600`}>Room: DN102</Text>
              </View>
            </ScrollView>
          </View> */
}

{
  /* <View style={tw`mb-6`}>
            <Text style={tw`text-xl my-5 font-normal`}>Grades</Text>
            <View style={tw`bg-gray-100 p-4 mb-4 rounded-lg shadow-md`}>
              <Text style={tw`font-bold text-base`}>Algorithms</Text>
              <Text style={tw`text-sm text-gray-600`}>Grade: 85%</Text>
            </View>
            <View style={tw`bg-gray-100 p-4 mb-4 rounded-lg shadow-md`}>
              <Text style={tw`font-bold text-base`}>Advanced Database</Text>
              <Text style={tw`text-sm text-gray-600`}>Grade: 78%</Text>
            </View>
          </View> */
}
