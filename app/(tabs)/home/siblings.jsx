import { Ionicons } from '@expo/vector-icons';
import tw from '@lib/tailwind';
import { router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

const Siblings = () => {
  return (
    <View>
      <TouchableOpacity
        style={tw`pt-10 px-4`}
        onPress={() => router.push('/home')}
      >
        <View style={tw`flex flex-row justify-start items-center`}>
          <Ionicons name='chevron-back-outline' size={24} color='#313477' />
          <Text style={tw`text-primaryBlue`}>Go Back</Text>
        </View>
      </TouchableOpacity>
      <Text>Siblings</Text>
    </View>
  );
};

export default Siblings;
