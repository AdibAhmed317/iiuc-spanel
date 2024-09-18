import { View, Text } from 'react-native';

import tw from '@lib/tailwind';

const CourseCard = ({
  courseName,
  courseCode,
  creditHour,
  section,
  subSection,
}) => {
  return (
    <View style={tw`bg-blue-50 p-4 mb-4 rounded-lg shadow-sm`}>
      <Text style={tw`font-normal text-lg mx-1`}>{courseName}</Text>
      <View style={tw`flex flex-row justify-start`}>
        <Text style={tw`text-sm text-gray-600 mx-1`}>
          Couse Code: {courseCode}
        </Text>
        <Text style={tw`text-sm text-gray-600 mx-5`}>
          Credit Hours: {creditHour}
        </Text>
      </View>
      <View style={tw`flex flex-row justify-start`}>
        <Text style={tw`text-sm text-gray-600 mx-1`}>Section: {section}</Text>
        <Text style={tw`text-sm text-gray-600 mx-5`}>
          Sub Section: {subSection}
        </Text>
      </View>
    </View>
  );
};

export default CourseCard;
