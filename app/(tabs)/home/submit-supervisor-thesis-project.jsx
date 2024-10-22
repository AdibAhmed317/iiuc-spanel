import React, { useState, useRef } from 'react';
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
  Animated,
  ActivityIndicator,
  Alert,
  SafeAreaView,
} from 'react-native';
import CustomButton from '@components/custom-button';
import FormField from '@components/form-field';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import tw from '@lib/tailwind';
import { coSupervisors, supervisors } from '@assets/data/dummyData';

const SubmitSupervisorThesisProject = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);
  const [selectedCoSupervisor, setSelectedCoSupervisor] = useState(null);
  const [modalType, setModalType] = useState('supervisor');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [students, setStudents] = useState(['', '', '', '']);

  // Animation Values
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  // Validation
  const isFormValid = () => {
    return (
      selectedSupervisor &&
      students.some((student) => student.trim().length > 0)
    );
  };

  // Animation Functions
  const animateModal = (show) => {
    Animated.spring(modalAnimatedValue, {
      toValue: show ? 1 : 0,
      useNativeDriver: true,
      tension: 65,
      friction: 8,
    }).start();
  };

  const shakeError = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleModal = (type) => {
    setModalType(type);
    setModalVisible(true);
    animateModal(true);
    setFilterText('');
  };

  const handleSelect = (item) => {
    if (modalType === 'supervisor') {
      setSelectedSupervisor(item);
    } else {
      setSelectedCoSupervisor(item);
    }
    animateModal(false);
    setModalVisible(false);
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      shakeError();
      Alert.alert(
        'Validation Error',
        'Please select a supervisor and add at least one student.',
        [{ text: 'OK' }]
      );
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push('/home');
    } catch (error) {
      Alert.alert('Error', 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredData = (
    modalType === 'supervisor' ? supervisors : coSupervisors
  ).filter(
    (item) =>
      item.label.toLowerCase().includes(filterText.toLowerCase()) ||
      item.department.toLowerCase().includes(filterText.toLowerCase())
  );

  const modalTranslateY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <KeyboardAvoidingView
        style={tw`flex-1`}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView
          style={tw`flex-1`}
          contentContainerStyle={tw`px-4 pt-10 pb-32`}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          <Text style={tw`text-2xl font-bold text-black/80 mb-6 text-center`}>
            Thesis Project Supervision
          </Text>

          <Animated.View
            style={[
              tw`flex-1 justify-center items-center`,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            {/* Supervisor Selector */}
            <TouchableOpacity
              style={tw`p-4 bg-gray-100 rounded-lg mb-4 w-full flex-row justify-between items-center ${
                selectedSupervisor ? 'border-green-500 border' : ''
              }`}
              onPress={() => toggleModal('supervisor')}
              activeOpacity={0.7}
            >
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm text-gray-500 mb-1`}>Supervisor</Text>
                <Text
                  style={tw`${
                    selectedSupervisor ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  {selectedSupervisor
                    ? selectedSupervisor.label
                    : 'Select Supervisor'}
                </Text>
                {selectedSupervisor && (
                  <Text style={tw`text-sm text-gray-500 mt-1`}>
                    {selectedSupervisor.department}
                  </Text>
                )}
              </View>
              <MaterialIcons name='arrow-drop-down' size={24} color='gray' />
            </TouchableOpacity>

            {/* Co-Supervisor Selector */}
            <TouchableOpacity
              style={tw`p-4 bg-gray-100 rounded-lg mb-4 w-full flex-row justify-between items-center ${
                selectedCoSupervisor ? 'border-green-500 border' : ''
              }`}
              onPress={() => toggleModal('coSupervisor')}
              activeOpacity={0.7}
            >
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm text-gray-500 mb-1`}>
                  Co-Supervisor (Optional)
                </Text>
                <Text
                  style={tw`${
                    selectedCoSupervisor ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  {selectedCoSupervisor
                    ? selectedCoSupervisor.label
                    : 'Select Co-Supervisor'}
                </Text>
                {selectedCoSupervisor && (
                  <Text style={tw`text-sm text-gray-500 mt-1`}>
                    {selectedCoSupervisor.department}
                  </Text>
                )}
              </View>
              <MaterialIcons name='arrow-drop-down' size={24} color='gray' />
            </TouchableOpacity>
          </Animated.View>

          {/* Student Forms */}
          <View style={tw`mt-6`}>
            <Text style={tw`text-lg font-semibold mb-4`}>Student Details</Text>
            {students.map((student, index) => (
              <FormField
                key={index}
                title={`Student ${index + 1}`}
                value={student}
                onChangeText={(text) => {
                  const newStudents = [...students];
                  newStudents[index] = text;
                  setStudents(newStudents);
                }}
                placeholder='Enter student name'
                required={index === 0}
              />
            ))}
          </View>

          {/* Submit Button */}
          <View style={tw`mt-6 mb-20`}>
            <CustomButton
              title={isSubmitting ? 'Submitting...' : 'Submit'}
              containerStyles={`${
                isFormValid() ? 'bg-primaryBlue' : 'bg-gray-400'
              } h-[50px] w-full`}
              handlePress={handleSubmit}
              textStyles='text-white font-semibold'
              disabled={isSubmitting || !isFormValid()}
            >
              {isSubmitting && (
                <ActivityIndicator color='white' style={tw`ml-2`} />
              )}
            </CustomButton>
          </View>
        </ScrollView>

        {/* Supervisor Selection Modal */}
        <Modal
          animationType='none'
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            animateModal(false);
            setModalVisible(false);
          }}
        >
          <View style={tw`flex-1 justify-end bg-black/50`}>
            <Animated.View
              style={[
                tw`bg-white rounded-t-xl w-full h-2/3`,
                { transform: [{ translateY: modalTranslateY }] },
              ]}
            >
              <View
                style={tw`p-4 border-b border-gray-200 flex-row justify-between items-center`}
              >
                <Text style={tw`text-lg font-semibold`}>
                  Select{' '}
                  {modalType === 'supervisor' ? 'Supervisor' : 'Co-Supervisor'}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    animateModal(false);
                    setModalVisible(false);
                  }}
                >
                  <MaterialIcons name='close' size={24} color='black' />
                </TouchableOpacity>
              </View>

              <TextInput
                style={tw`mx-4 mt-4 h-12 border border-gray-300 rounded-lg px-4 mb-2`}
                placeholder='Search by name or department...'
                value={filterText}
                onChangeText={setFilterText}
                autoCorrect={false}
              />

              <FlatList
                data={filteredData}
                keyExtractor={(item) => item.value}
                contentContainerStyle={tw`px-4`}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={tw`p-4 border-b border-gray-100 flex-row justify-between items-center`}
                    onPress={() => handleSelect(item)}
                  >
                    <View style={tw`flex-1`}>
                      <Text style={tw`text-base font-medium`}>
                        {item.label}
                      </Text>
                      <Text style={tw`text-sm text-gray-500 mt-1`}>
                        {item.department}
                      </Text>
                    </View>
                    <MaterialIcons
                      name='chevron-right'
                      size={24}
                      color='gray'
                    />
                  </TouchableOpacity>
                )}
                ListEmptyComponent={() => (
                  <View style={tw`py-8 items-center`}>
                    <Text style={tw`text-gray-500`}>No results found</Text>
                  </View>
                )}
              />
            </Animated.View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SubmitSupervisorThesisProject;
