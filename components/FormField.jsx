import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from '../lib/tailwind';
import Entypo from 'react-native-vector-icons/Entypo';

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyle,
  placeholder,
  secureTextEntry,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={tw`${otherStyle} my-2`}>
      <Text style={tw`text-base text-primaryBlue font-medium`}>{title}</Text>
      <View
        style={tw`w-full h-12 border-2 border-gray-50 rounded-lg px-4 bg-black/5 focus:border-blue-900 items-center flex-row`}
      >
        <TextInput
          style={tw`flex-1 w-full h-full text-black font-semibold text-base`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#93959b'
          onChangeText={handleChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <View style={tw`flex justify-center items-center w-full h-full`}>
              {!showPassword ? (
                <Entypo name='eye-with-line' color='#5e5f61' size={20} />
              ) : (
                <Entypo name='eye' color='#5e5f61' size={20} />
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
