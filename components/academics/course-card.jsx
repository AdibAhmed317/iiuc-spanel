import { View, Text } from 'react-native';
import tw from '../../lib/tailwind';

const CourseCard = () => {
  return (
    <View style={tw`bg-blue-50 p-4 mb-4 rounded-lg shadow-sm`}>
      <Text style={tw`font-light text-base`}>Advanced Database</Text>
      <Text style={tw`text-sm text-gray-600`}>Instructor: Dr. Jane Smith</Text>
    </View>
  );
};

export default CourseCard;
