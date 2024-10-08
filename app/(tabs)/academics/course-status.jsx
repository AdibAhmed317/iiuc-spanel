/*
  Course Status Table
    - Ongoing Courses
    - Completed Courses
    - Result Up-Coming
    - Waiting Course
    - Previous Failed Courses
    - Pending/Missing Courses
*/

import { View, Text, ScrollView, FlatList } from 'react-native';
import React from 'react';
import tw from '@lib/tailwind';
import {
  courseStatusCompleted,
  courseStatusOngoing,
  courseStatusPendingMissing,
  courseStatusPrevFailed,
  courseStatusUpcoming,
  courseStatusWaiting,
} from '@assets/data/dummyData';

const CourseStatus = () => {
  const headerComponent = () => (
    <View style={tw`flex flex-row border-b border-gray-200`}>
      <Text
        style={tw`w-12 p-2 text-center font-semibold border-r border-gray-200`}
      >
        SL
      </Text>
      <Text
        style={tw`w-32 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Course Code
      </Text>
      <Text
        style={tw`w-40 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Course Name
      </Text>
      <Text
        style={tw`w-20 p-2 text-center font-semibold border-r border-gray-200`}
      >
        C. H.
      </Text>
      <Text
        style={tw`w-20 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Status
      </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={tw`flex flex-row border-b border-gray-200 `}>
      <Text style={tw`w-12 p-2 text-center border-r border-gray-200`}>
        {item.sl}
      </Text>
      <Text style={tw`w-32 p-2 text-center border-r border-gray-200`}>
        {item.courseCode}
      </Text>
      <Text style={tw`w-40 p-2 text-center border-r border-gray-200`}>
        {item.courseName}
      </Text>
      <Text style={tw`w-20 p-2 text-center border-r border-gray-200`}>
        {item.ch}
      </Text>
      <Text style={tw`w-20 p-2 text-center border-r border-gray-200 text-xs`}>
        {item.status}
      </Text>
    </View>
  );

  return (
    <ScrollView style={tw`bg-white flex-1 px-4`}>
      <View style={tw`bg-blue-50 p-2 rounded-xl mt-14`}>
        <Text>
          <Text style={tw`font-bold`}>Matric No: </Text>
          <Text>C123123</Text>
        </Text>
        <Text>
          <Text style={tw`font-bold`}>Semester Name: </Text>
          <Text>Autumn-2024</Text>
        </Text>
        <Text>
          <Text style={tw`font-bold`}>Registration No: </Text>
          <Text>0062110005101055</Text>
        </Text>
      </View>

      <View style={tw`bg-blue-50 p-2 rounded-xl mt-5`}>
        <Text>
          <Text style={tw`font-bold`}>Department: </Text>
          <Text>Computer Science and Engineering</Text>
        </Text>
        <Text>
          <Text style={tw`font-bold`}>Program: </Text>
          <Text>Bachelor Program</Text>
        </Text>
        <Text>
          <Text style={tw`font-bold`}>Semester Number: </Text>
          <Text>Seventh Semester</Text>
        </Text>
      </View>

      <ScrollView horizontal>
        <View style={tw`w-full mt-5`}>
          <Text style={tw`font-bold`}>On Going Courses</Text>
          <FlatList
            data={courseStatusOngoing}
            renderItem={renderItem}
            keyExtractor={(item) => item.sl}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={tw`mt-5 mb-1 w-full pb-1`}
          />
          <Text style={tw`font-bold`}>Total Credit: </Text>
        </View>
      </ScrollView>

      <ScrollView horizontal>
        <View style={tw`w-full mt-5`}>
          <Text style={tw`font-bold`}>Completed Courses</Text>
          <FlatList
            data={courseStatusCompleted}
            renderItem={renderItem}
            keyExtractor={(item) => item.sl}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={tw`mt-5 mb-1 w-full pb-1`}
          />
          <Text style={tw`font-bold`}>Total Credit: </Text>
        </View>
      </ScrollView>

      <ScrollView horizontal>
        <View style={tw`w-full mt-5`}>
          <Text style={tw`font-bold`}>Result Up-Coming</Text>
          <FlatList
            data={courseStatusUpcoming}
            renderItem={renderItem}
            keyExtractor={(item) => item.sl}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={tw`mt-5 mb-1 w-full pb-1`}
          />
          <Text style={tw`font-bold`}>Total Credit: </Text>
        </View>
      </ScrollView>

      <ScrollView horizontal>
        <View style={tw`w-full mt-5`}>
          <Text style={tw`font-bold`}>Waiting Course</Text>
          <FlatList
            data={courseStatusWaiting}
            renderItem={renderItem}
            keyExtractor={(item) => item.sl}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={tw`mt-5 mb-1 w-full pb-1`}
          />
          <Text style={tw`font-bold`}>Total Credit: </Text>
        </View>
      </ScrollView>

      <ScrollView horizontal>
        <View style={tw`w-full mt-5`}>
          <Text style={tw`font-bold`}>Previous Failed Courses</Text>
          <FlatList
            data={courseStatusPrevFailed}
            renderItem={renderItem}
            keyExtractor={(item) => item.sl}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={tw`mt-5 mb-1 w-full pb-1`}
          />
          <Text style={tw`font-bold`}>Total Credit: </Text>
        </View>
      </ScrollView>

      <ScrollView horizontal>
        <View style={tw`w-full mt-5`}>
          <Text style={tw`font-bold`}>Pending/Missing Courses</Text>
          <FlatList
            data={courseStatusPendingMissing}
            renderItem={renderItem}
            keyExtractor={(item) => item.sl}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={tw`mt-5 mb-10 w-full pb-10`}
          />
          <Text style={tw`font-bold`}>Total Credit: </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default CourseStatus;
