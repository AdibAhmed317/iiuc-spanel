import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from '../../lib/tailwind';
import CustomButton from '../custom-button';

const ButtonGroup = () => {
  const [currentStudent, setCurrentStudent] = useState(true);

  const graduateOption = [
    'Registration Summary',
    'Payment History',
    'Clearance Form',
    'Payment Slip',
    'Course Status',
    'Profile',
    'Result View',
    'Password',
  ];

  const currentOption = [
    'Class Routine',
    'Payment History',
    'Payment Slip',
    'Result View',
    'Submit Supervisor for Thesis/Project',
    'Course Status',
    'Siblings',
    'Submit Thesis/Project Proposal',
    'Password',
  ];

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
