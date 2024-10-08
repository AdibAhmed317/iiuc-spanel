import tw from '@lib/tailwind';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';

const notices = [
  {
    id: '1',
    title: 'Holiday Notice',
    description:
      'The university will be closed on August 25th for a national holiday.',
    date: '2024-08-20',
  },
  {
    id: '2',
    title: 'Exam Schedule',
    description:
      'The exam schedule for the Fall semester has been released. Please check the official website.',
    date: '2024-08-18',
  },
  {
    id: '3',
    title: 'Library Hours',
    description: 'The library will have extended hours during the exam period.',
    date: '2024-08-15',
  },
];

const TransportNotice = () => {
  const renderNotice = ({ item }) => (
    <TouchableOpacity style={tw`p-4 mb-3 bg-white rounded-lg shadow-md`}>
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

export default TransportNotice;
