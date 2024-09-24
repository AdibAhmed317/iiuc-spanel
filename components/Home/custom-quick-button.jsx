import { View } from 'react-native';

import tw from '@lib/tailwind';
import { currentOption, graduateOption } from '@assets/data/btn-data';

import CustomButton from '@components/custom-button';
import { router } from 'expo-router';

const ButtonGroup = () => {
  const currentStudent = true;

  const buttonsToDisplay = currentStudent ? currentOption : graduateOption;

  return (
    <View style={tw`flex flex-wrap flex-row justify-center mb-20`}>
      {buttonsToDisplay.map((item, index) => (
        <CustomButton
          key={index}
          title={item.title}
          containerStyles='bg-green-50 border border-gray-300 rounded-lg px-4 py-2 m-1 shadow-md h-[50px]'
          textStyles='text-primaryGreen font-semibold text-xs'
          handlePress={() => router.push(`${item.route}`)}
        />
      ))}
    </View>
  );
};

export default ButtonGroup;
