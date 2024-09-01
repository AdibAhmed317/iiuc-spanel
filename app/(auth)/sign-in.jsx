import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../../lib/tailwind';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import bg from '../../assets/images/sign-in.jpg';
import logo from '../../assets/images/iconT.png';
import { Link, router } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(true);

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}
      >
        <ScrollView contentContainerStyle={tw`flex-grow`}>
          <View style={tw`flex-1 p-6`}>
            <View style={tw`flex justify-center items-center mt-5`}>
              <Image style={tw`h-36 w-36`} source={logo} />
              <Text
                style={tw`text-xl text-primaryBlue text-center font-semibold mt-4`}
              >
                International Islamic University Chittagong
              </Text>
            </View>
            <View style={tw`w-full mt-8`}>
              <FormField
                title='ID'
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyle='mt-7 text-primaryBlue'
                placeholder='Enter Student ID'
              />
              <FormField
                title='Password'
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyle='mt-7 text-primaryBlue'
                placeholder='Enter Password'
                secureTextEntry={true}
              />
              <CustomButton
                title='Login'
                containerStyles='bg-green-500 mt-2'
                handlePress={() => {
                  router.push('/home');
                }}
                textStyles='text-white'
              />
              <TouchableOpacity
                style={tw`mt-4 self-center`}
                onPress={handleForgotPassword}
              >
                <Link
                  href='/verification'
                  style={tw`text-sm font-semibold text-blue-500`}
                >
                  Forgot Password?
                </Link>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`mt-auto shadow-2xl shadow-blue-800`}>
            {loading && <ActivityIndicator size='large' color='#000000' />}
            <Image
              style={tw`h-60 w-full rounded-t-[3rem]`}
              source={bg}
              resizeMode='cover'
              onLoad={handleImageLoad}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
