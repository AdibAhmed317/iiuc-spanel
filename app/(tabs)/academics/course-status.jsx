/*
  Course Status Table
    - Ongoing Courses
    - Completed Courses
    - Result Up-Coming
    - Waiting Course
    - Previous Failed Courses
    - Pending/Missing Courses
*/

import { View, Text } from 'react-native';
import React from 'react';
import tw from '@lib/tailwind';

const CourseStatus = () => {
  return (
    <View style={tw`bg-white flex-1 px-4`}>
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
    </View>
  );
};

export default CourseStatus;
