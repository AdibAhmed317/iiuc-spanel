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
import NoticeCard from '@components/notice/notice-card';

const Notice = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <FlatList
        style={tw`bg-white`}
        data={notices}
        renderItem={NoticeCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`p-4`}
      />
    </>
  );
};

export default Notice;
