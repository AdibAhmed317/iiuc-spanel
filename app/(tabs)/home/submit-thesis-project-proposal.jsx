import CustomButton from '@components/custom-button';
import FormField from '@components/form-field';
import tw from '@lib/tailwind';
import { View, Text } from 'react-native';

const SubmitThesisProjectProposal = () => {
  return (
    <View style={tw`bg-white flex-1 pt-10 px-4`}>
      <View style={tw`h-full w-full justify-center items-center`}>
        <Text style={tw`text-xl text-black/80 mb-5 text-center`}>
          Submit Supervisor/Co-Supervisor for Thesis/Project
        </Text>
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

export default SubmitThesisProjectProposal;
