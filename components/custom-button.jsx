import { TouchableOpacity, Text } from 'react-native';

import tw from '@lib/tailwind';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={tw`rounded-md min-h-[30px] justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-0' : ''
      }`}
    >
      <Text style={tw`${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
