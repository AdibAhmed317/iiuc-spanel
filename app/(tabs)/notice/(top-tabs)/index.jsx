import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '@lib/tailwind';
import { notices } from '@assets/data/dummyData';
import { router } from 'expo-router';

const Notice = () => {
  const renderNotice = ({ item }) => (
    <TouchableOpacity
      style={tw`p-4 mb-3 bg-white rounded-lg shadow-md`}
      onPress={() => {
        router.push('/notice/notice-details');
      }}
    >
      <Text style={tw`text-lg font-semibold mb-1`}>{item.title}</Text>
      <Text style={tw`text-sm text-gray-500 mb-2`}>{item.date}</Text>
      <Text style={tw`text-base text-gray-800`}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <FlatList
        style={tw`bg-white`}
        data={notices}
        renderItem={renderNotice}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`p-4`}
      />
    </>
  );
};

export default Notice;
