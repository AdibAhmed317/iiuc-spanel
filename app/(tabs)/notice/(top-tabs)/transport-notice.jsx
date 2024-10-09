import { StatusBar, FlatList } from 'react-native';

import tw from '@lib/tailwind';
import NoticeCard from '@components/notice/notice-card';
import { transportNotices } from '@assets/data/dummyData';

const TransportNotice = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <FlatList
        style={tw`bg-white`}
        data={transportNotices}
        renderItem={NoticeCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`p-4`}
      />
    </>
  );
};

export default TransportNotice;
