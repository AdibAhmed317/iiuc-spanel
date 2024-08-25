import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from '../../lib/tailwind';
import CustomButton from '../../components/CustomButton';

const ButtonGroup = () => {
  const buttons = [
    'Clearance Form',
    'Payment Slip',
    'Course Status',
    'Payment History',
    'Profile',
    'Registration Summary',
    'Password',
    'Result View',
  ];

  return (
    <View style={tw`flex flex-wrap flex-row justify-center`}>
      {buttons.map((buttonLabel, index) => (
        <CustomButton
          key={index}
          title={buttonLabel}
          containerStyles='bg-green-50 border border-gray-300 rounded-lg px-4 py-2 m-1'
          textStyles='text-primaryGreen font-thin'
        />
      ))}
    </View>
  );
};

export default ButtonGroup;
