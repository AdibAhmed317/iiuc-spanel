import { View } from 'react-native';

import tw from '@lib/tailwind';
import { currentOption, graduateOption } from '@assets/data/btn-data';

import CustomButton from '@components/custom-button';

const ButtonGroup = () => {
  const currentStudent = true;

  const buttonsToDisplay = currentStudent ? currentOption : graduateOption;

  return (
    <View style={tw`flex flex-wrap flex-row justify-center mb-20`}>
      {buttonsToDisplay.map((buttonLabel, index) => (
        <CustomButton
          key={index}
          title={buttonLabel}
          containerStyles='bg-green-50 border border-gray-300 rounded-lg px-4 py-2 m-1 shadow-md'
          textStyles='text-primaryGreen font-semibold text-xs'
        />
      ))}
    </View>
  );
};

export default ButtonGroup;
