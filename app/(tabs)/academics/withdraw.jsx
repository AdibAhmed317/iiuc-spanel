import { Ionicons } from '@expo/vector-icons';
import tw from '@lib/tailwind';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';

const Withdraw = () => {
  return (
    <View>
      <TouchableOpacity
        style={tw`pt-10 px-4`}
        onPress={() => router.push('/academics')}
      >
        <View style={tw`flex flex-row justify-start items-center`}>
          <Ionicons name='chevron-back-outline' size={24} color='#313477' />
          <Text style={tw`text-primaryBlue`}>Go Back</Text>
        </View>
      </TouchableOpacity>
      <Text>Withdraw</Text>
    </View>
  );
};

export default Withdraw;
