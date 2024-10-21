import React, { useState } from 'react';
import CustomButton from '@components/custom-button';
import FormField from '@components/form-field';
import tw from '@lib/tailwind';
import { router } from 'expo-router';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

const SubmitSupervisorThesisProject = () => {
  const [supervisorModalVisible, setSupervisorModalVisible] = useState(false);
  const [coSupervisorModalVisible, setCoSupervisorModalVisible] =
    useState(false);
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);
  const [selectedCoSupervisor, setSelectedCoSupervisor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const supervisors = [
    { label: 'Dr. John Doe', value: 'dr_john_doe' },
    { label: 'Dr. Jane Smith', value: 'dr_jane_smith' },
    { label: 'Dr. Alice Johnson', value: 'dr_alice_johnson' },
    { label: 'Dr. Bob Williams', value: 'dr_bob_williams' },
    { label: 'Dr. Carol Brown', value: 'dr_carol_brown' },
    { label: 'Dr. David Lee', value: 'dr_david_lee' },
    { label: 'Dr. Emily Chen', value: 'dr_emily_chen' },
  ];

  const coSupervisors = [
    { label: 'Prof. Adam Lee', value: 'prof_adam_lee' },
    { label: 'Prof. Lisa Ray', value: 'prof_lisa_ray' },
    { label: 'Prof. Mark Taylor', value: 'prof_mark_taylor' },
    { label: 'Prof. Sarah White', value: 'prof_sarah_white' },
  ];

  const filteredSupervisors = supervisors.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCoSupervisors = coSupervisors.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const OptionPicker = ({ visible, onClose, options, onSelect, title }) => (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 justify-end`}>
        <View style={tw`bg-gray-100 rounded-t-lg p-5 h-3/4`}>
          <Text style={tw`text-xl font-bold mb-4`}>{title}</Text>
          <TextInput
            style={tw`bg-gray-200 p-2 rounded-md mb-4`}
            placeholder='Search...'
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={tw`p-3 border-b border-gray-200`}
                onPress={() => {
                  onSelect(item);
                }}
              >
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
          <CustomButton
            title='Close'
            containerStyles='bg-red-500 mt-4 h-[50px] mb-10'
            handlePress={onClose}
            textStyles='text-white font-semibold'
          />
        </View>
      </View>
    </Modal>
  );

  return (
    <KeyboardAvoidingView
      style={tw`flex-1 bg-white`}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView style={tw`flex-1 pt-10 px-4`}>
        <Text style={tw`text-xl text-black/80 mb-2 text-center`}>
          Submit Supervisor/Co-Supervisor for Thesis/Project
        </Text>

        <View style={tw`my-2 w-full`}>
          <Text style={tw`text-lg text-black mb-2`}>Select Supervisor</Text>
          <TouchableOpacity
            style={tw`bg-gray-200 p-3 rounded-md`}
            onPress={() => setSupervisorModalVisible(true)}
          >
            <Text>
              {selectedSupervisor
                ? selectedSupervisor.label
                : 'Choose Supervisor'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={tw`my-2 w-full`}>
          <Text style={tw`text-lg text-black mb-2`}>Select Co-Supervisor</Text>
          <TouchableOpacity
            style={tw`bg-gray-200 p-3 rounded-md`}
            onPress={() => setCoSupervisorModalVisible(true)}
          >
            <Text>
              {selectedCoSupervisor
                ? selectedCoSupervisor.label
                : 'Choose Co-Supervisor'}
            </Text>
          </TouchableOpacity>
        </View>

        <FormField title='Student 1' />
        <FormField title='Student 2' />
        <FormField title='Student 3' />
        <FormField title='Student 4' />

        <CustomButton
          title='Submit'
          containerStyles='bg-primaryBlue mt-6 h-[50px] w-full mb-20'
          handlePress={() => {
            router.navigate('/home');
          }}
          textStyles='text-white font-semibold'
        />
      </ScrollView>

      <OptionPicker
        visible={supervisorModalVisible}
        onClose={() => setSupervisorModalVisible(false)}
        options={filteredSupervisors}
        onSelect={setSelectedSupervisor}
        title='Select Supervisor'
      />

      <OptionPicker
        visible={coSupervisorModalVisible}
        onClose={() => setCoSupervisorModalVisible(false)}
        options={filteredCoSupervisors}
        onSelect={setSelectedCoSupervisor}
        title='Select Co-Supervisor'
      />
    </KeyboardAvoidingView>
  );
};

export default SubmitSupervisorThesisProject;
