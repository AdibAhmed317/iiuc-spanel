import CustomButton from '@components/custom-button';
import FormField from '@components/form-field';
import tw from '@lib/tailwind';
import { router } from 'expo-router';
import { View, Text } from 'react-native';

const Password = () => {
  return (
    <View style={tw`bg-white flex-1 pt-10 px-4`}>
      <View style={tw`h-full w-full justify-center items-center`}>
        <Text style={tw`text-2xl text-black/80 mb-5`}>Change Password</Text>
        <FormField title='Current Password' />
        <FormField title='New Password' />
        <FormField title='Retype Password' />
        <CustomButton
          title='Submit'
          containerStyles='bg-primaryBlue mt-6 h-[50px] mx-2 w-full'
          handlePress={() => {
            router.push('/home');
          }}
          textStyles='text-white font-semibold'
        />
      </View>
    </View>
  );
};

export default Password;
