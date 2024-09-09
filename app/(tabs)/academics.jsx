import { View, Text, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../../lib/tailwind';

const Academics = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={tw`bg-white flex-1`}>
        <ScrollView style={tw`p-4 flex-1`}>
          <View style={tw`mb-6`}>
            <Text style={tw`text-lg font-semibold mb-2`}>Current Courses</Text>
            <View style={tw`bg-gray-100 p-4 mb-4 rounded-lg shadow-md`}>
              <Text style={tw`font-bold text-base`}>Algorithms</Text>
              <Text style={tw`text-sm text-gray-600`}>09:30 AM - 11:30 AM</Text>
              <Text style={tw`text-sm text-gray-600`}>
                Instructor: Dr. John Doe
              </Text>
              <Text style={tw`text-sm text-gray-600`}>Room: DN101</Text>
            </View>

            <View style={tw`bg-gray-100 p-4 mb-4 rounded-lg shadow-md`}>
              <Text style={tw`font-bold text-base`}>Advanced Database</Text>
              <Text style={tw`text-sm text-gray-600`}>12:30 PM - 1:30 PM</Text>
              <Text style={tw`text-sm text-gray-600`}>
                Instructor: Dr. Jane Smith
              </Text>
              <Text style={tw`text-sm text-gray-600`}>Room: DN102</Text>
            </View>
          </View>

          <View style={tw`mb-6`}>
            <Text style={tw`text-lg font-semibold mb-2`}>Class Schedule</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={tw`bg-yellow-200 p-4 mr-4 rounded-lg`}>
                <Text style={tw`text-base font-bold`}>Mon</Text>
                <Text style={tw`text-sm text-gray-600`}>
                  09:30 AM - 11:30 AM
                </Text>
                <Text style={tw`text-sm text-gray-600`}>Room: DN101</Text>
              </View>

              <View style={tw`bg-yellow-200 p-4 mr-4 rounded-lg`}>
                <Text style={tw`text-base font-bold`}>Tue</Text>
                <Text style={tw`text-sm text-gray-600`}>
                  12:30 PM - 1:30 PM
                </Text>
                <Text style={tw`text-sm text-gray-600`}>Room: DN102</Text>
              </View>
            </ScrollView>
          </View>

          <View style={tw`mb-6`}>
            <Text style={tw`text-lg font-semibold mb-2`}>Grades</Text>
            <View style={tw`bg-gray-100 p-4 mb-4 rounded-lg shadow-md`}>
              <Text style={tw`font-bold text-base`}>Algorithms</Text>
              <Text style={tw`text-sm text-gray-600`}>Grade: 85%</Text>
            </View>
            <View style={tw`bg-gray-100 p-4 mb-4 rounded-lg shadow-md`}>
              <Text style={tw`font-bold text-base`}>Advanced Database</Text>
              <Text style={tw`text-sm text-gray-600`}>Grade: 78%</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Academics;
