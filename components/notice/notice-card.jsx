// import { View, Text, TouchableOpacity } from 'react-native';
// import tw from '@lib/tailwind';
// import { router } from 'expo-router';

// const NoticeCard = ({ item }) => {
//   return (
//     <TouchableOpacity
//       style={tw`p-4 mb-3 bg-white rounded-lg shadow-md`}
//       onPress={() => {
//         router.push('/notice/notice-details');
//       }}
//     >
//       <View>
//         <Text style={tw`text-sm text-gray-500 mb-2`}>{item.date}</Text>
//       </View>
//       <View></View>
//       <Text style={tw`text-lg font-semibold mb-1`}>{item.title}</Text>
//       <Text style={tw`text-base text-gray-800`}>{item.description}</Text>
//     </TouchableOpacity>
//   );
// };

// export default NoticeCard;

import { View, Text, TouchableOpacity } from 'react-native';
import tw from '@lib/tailwind';
import { router } from 'expo-router';
import moment from 'moment'; // Import moment.js to easily format dates

const NoticeCard = ({ item }) => {
  // Use moment.js to format the date
  const date = moment(item.date);
  const day = date.format('DD'); // Get day (e.g., 05)
  const month = date.format('MMMM').toUpperCase(); // Get full month name and make it uppercase (e.g., OCTOBER)
  const year = date.format('YYYY'); // Get year (e.g., 2024)
  const weekday = date.format('dddd'); // Get weekday (e.g., Saturday)

  return (
    <TouchableOpacity
      style={tw`p-4 mb-3 bg-white rounded-lg shadow-md`}
      onPress={() => {
        router.push('/notice/notice-details');
      }}
    >
      <View style={tw`flex-row items-start mb-2`}>
        {/* Calendar-style Date View */}
        <View style={tw`rounded-lg p-2 mr-3`}>
          <Text style={tw`text-black text-center font-bold`}>{month}</Text>
          <Text style={tw`text-black text-2xl text-center font-bold`}>
            {day}
          </Text>
          <Text style={tw`text-center text-gray-600`}>{year}</Text>
          <Text style={tw`text-center text-gray-600`}>{weekday}</Text>
        </View>

        {/* Notice Title and Description */}
        <View style={tw`flex-1`}>
          {/* Use flex-1 to ensure the content takes up remaining space */}
          <Text style={tw`text-lg font-semibold mb-1`}>{item.title}</Text>
          <Text
            style={tw`text-base text-gray-800`}
            numberOfLines={2}
            ellipsizeMode='tail'
          >
            {item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NoticeCard;
