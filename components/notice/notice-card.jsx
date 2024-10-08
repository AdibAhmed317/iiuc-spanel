import { View, Text, TouchableOpacity } from 'react-native';
import tw from '@lib/tailwind';
import { router } from 'expo-router';
import moment from 'moment';

const NoticeCard = ({ item }) => {
  const date = moment(item.date);
  const day = date.format('DD');
  const month = date.format('MMMM').toUpperCase();
  const year = date.format('YYYY');
  const weekday = date.format('dddd');

  return (
    <TouchableOpacity
      style={tw`p-4 mb-3 bg-white rounded-lg shadow-md`}
      onPress={() => {
        router.push('/notice/notice-details');
      }}
    >
      <View style={tw`flex-row items-start mb-2`}>
        <View style={tw`rounded-lg p-2 mr-3`}>
          <Text style={tw`text-black text-center font-bold`}>{month}</Text>
          <Text style={tw`text-black text-2xl text-center font-bold`}>
            {day}
          </Text>
          <Text style={tw`text-center text-gray-600`}>{year}</Text>
          <Text style={tw`text-center text-gray-600`}>{weekday}</Text>
        </View>

        <View style={tw`flex-1`}>
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
