import { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormField from '@components/form-field';
import CustomButton from '@components/custom-button';
import tw from '@lib/tailwind';
import logo from '@assets/images/iconT.png';
import bg from '@assets/images/sign-in.jpg';

const { height } = Dimensions.get('window');

const Verification = () => {
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
    <SafeAreaView
      style={tw`flex-1 bg-white`}
      edges={['bottom', 'left', 'right']}
    >
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={tw`flex-grow`}
          keyboardShouldPersistTaps='handled'
        >
          <View style={tw`h-[${height * 0.45}px]`}>
            <Image
              style={tw`absolute w-full h-full`}
              source={bg}
              resizeMode='cover'
              onLoad={handleImageLoad}
            />
            <View style={tw`absolute top-0 left-0 w-full h-full bg-black/45`} />
            <View
              style={tw`absolute top-0 left-0 w-full h-full flex justify-center items-center pt-10`}
            >
              <View style={tw`bg-white p-2 rounded-full shadow-lg`}>
                <Image style={tw`h-20 w-20`} source={logo} />
              </View>
              <Text
                style={tw`text-2xl text-white font-semibold text-center mt-2 px-4`}
              >
                International Islamic University Chittagong
              </Text>
            </View>
          </View>

          <View style={tw`flex-1 bg-white -mt-10 rounded-t-[3rem] px-6 pt-8`}>
            <Text style={tw`text-3xl font-light text-primaryBlue mb-6`}>
              Verification
            </Text>
            <FormField
              title='Verification Code'
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyle='mt-4 text-primaryBlue p-2'
              placeholder='Enter Verification code'
            />
            <CustomButton
              title='SUBMIT'
              containerStyles='bg-green-500 mt-2 h-[50px] mx-2'
              handlePress={() => {
                router.push('/home');
              }}
              textStyles='text-white font-semibold'
            />
            <View style={tw`flex-row justify-center items-center mt-3`}>
              <Text style={tw`mx-1 font-light`}>Didn't get any?</Text>
              <Link
                href='/sign-in'
                style={tw`text-sm font-light text-blue-500 mx-1`}
              >
                login again
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {loading && (
        <ActivityIndicator
          style={tw`absolute z-10 w-full h-full bg-white`}
          size='large'
          color='#000000'
        />
      )}
    </SafeAreaView>
  );
};

export default Verification;
