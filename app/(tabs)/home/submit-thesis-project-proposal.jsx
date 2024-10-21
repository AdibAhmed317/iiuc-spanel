import CustomButton from '@components/custom-button';
import FormField from '@components/form-field';
import tw from '@lib/tailwind';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const SubmitThesisProjectProposal = () => {
  const [openSupervisor, setOpenSupervisor] = useState(false);
  const [valueSupervisor, setValueSupervisor] = useState(null);
  const [itemsSupervisor, setItemsSupervisor] = useState([
    { label: 'Dr. John Doe', value: 'dr_john_doe' },
    { label: 'Dr. Jane Smith', value: 'dr_jane_smith' },
  ]);

  const [openCoSupervisor, setOpenCoSupervisor] = useState(false);
  const [valueCoSupervisor, setValueCoSupervisor] = useState(null);
  const [itemsCoSupervisor, setItemsCoSupervisor] = useState([
    { label: 'Prof. Adam Lee', value: 'prof_adam_lee' },
    { label: 'Prof. Lisa Ray', value: 'prof_lisa_ray' },
  ]);

  return (
    <KeyboardAvoidingView
      style={tw`flex-1 bg-white`}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={tw`flex-1 pt-10 px-4`}>
        <Text style={tw`text-xl text-black/80 mb-2 text-center`}>
          Submit Supervisor/Co-Supervisor for Thesis/Project
        </Text>

        <View style={tw`z-50`}>
          {/* Supervisor Dropdown */}
          <View style={tw`my-2 w-full`}>
            <Text style={tw`text-lg text-black mb-2`}>Select Supervisor</Text>
            <DropDownPicker
              open={openSupervisor}
              value={valueSupervisor}
              items={itemsSupervisor}
              searchable={true}
              searchPlaceholder='Supervisor Name'
              setOpen={setOpenSupervisor}
              setValue={setValueSupervisor}
              setItems={setItemsSupervisor}
              placeholder='Choose Supervisor'
              style={tw`bg-gray-200 border-gray-300`}
              dropDownContainerStyle={tw`bg-gray-100 border-gray-300`}
              labelStyle={tw`text-black`}
              listItemLabelStyle={tw`text-black`}
              arrowIconStyle={tw`tint-black`}
              textStyle={tw`text-black`}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>

          {/* Co-Supervisor Dropdown */}
          <View style={tw`my-2 w-full`}>
            <Text style={tw`text-lg text-black mb-2`}>
              Select Co-Supervisor
            </Text>
            <DropDownPicker
              open={openCoSupervisor}
              value={valueCoSupervisor}
              items={itemsCoSupervisor}
              searchable={true}
              searchPlaceholder='Co Supervisor Name'
              setOpen={setOpenCoSupervisor}
              setValue={setValueCoSupervisor}
              setItems={setItemsCoSupervisor}
              placeholder='Choose Co-Supervisor'
              style={tw`bg-gray-200 border-gray-300`}
              dropDownContainerStyle={tw`bg-gray-100 border-gray-300`}
              labelStyle={tw`text-black`}
              listItemLabelStyle={tw`text-black`}
              arrowIconStyle={tw`tint-black`}
              textStyle={tw`text-black`}
              zIndex={2000}
              zIndexInverse={2000}
            />
          </View>
        </View>

        <ScrollView style={tw`h-full w-full mb-20`}>
          <FormField title='Student 1' />
          <FormField title='Student 1' />
          <FormField title='Student 1' />
          <FormField title='Student 1' />
          <CustomButton
            title='Submit'
            containerStyles='bg-primaryBlue mt-6 h-[50px] w-full'
            handlePress={() => {
              router.navigate('/home');
            }}
            textStyles='text-white font-semibold'
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SubmitThesisProjectProposal;
