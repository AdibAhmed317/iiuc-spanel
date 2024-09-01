import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from '../../lib/tailwind';
import CustomButton from '../../components/CustomButton';

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
    'Course Registration',
    'Add/Drop',
    'Withdraw',
    'Class Routine',
    'Payment History',
    'Payment Slip',
    'Registration Summary',
    'Result View',
    'Submit Supervisor for Thesis/Project',
    'Course Status',
    'TER',
    'Siblings',
    'Submit Thesis/Project Proposal',
    'Password',
  ];

  const buttonsToDisplay = currentStudent ? currentOption : graduateOption;

  return (
    <View style={tw`flex flex-wrap flex-row justify-center`}>
      {buttonsToDisplay.map((buttonLabel, index) => (
        <CustomButton
          key={index}
          title={buttonLabel}
          containerStyles='bg-green-50 border border-gray-300 rounded-lg px-4 py-2 m-1'
          textStyles='text-primaryGreen font-semibold text-xs'
        />
      ))}
    </View>
  );
};

export default ButtonGroup;
