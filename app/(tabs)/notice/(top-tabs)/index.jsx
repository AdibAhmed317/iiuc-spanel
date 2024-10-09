import { FlatList, StatusBar } from 'react-native';

import NoticeCard from '@components/notice/notice-card';
import tw from '@lib/tailwind';
import { notices } from '@assets/data/dummyData';

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
