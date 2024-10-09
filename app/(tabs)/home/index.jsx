import { View, Text, StatusBar, ScrollView } from 'react-native';

import tw from '@lib/tailwind';
import HomeHeader from '@components/home/home-header';
import ButtonGroup from '@components/home/custom-quick-button';

const Home = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <ScrollView style={tw`flex-1 bg-white`}>
        <HomeHeader />
        <View style={tw`flex flex-row justify-between`}>
          <View
            style={tw`h-40 flex-1 bg-purple-100 m-3 rounded-3xl flex justify-center items-center shadow-xl`}
          >
            <View style={tw`flex-1 flex justify-end items-center`}>
              <Text style={tw`text-xl font-light text-primaryBlue mx-1`}>
                Current CGPA
              </Text>
            </View>
            <View style={tw`flex-1 flex justify-center items-center`}>
              <Text style={tw`text-2xl font-light text-black/60`}>3.347</Text>
            </View>
          </View>
          <View
            style={tw`h-40 flex-1 bg-pink-100 m-3 rounded-3xl flex justify-center items-center shadow-xl`}
          >
            <View style={tw`flex-1 flex justify-end items-center`}>
              <Text style={tw`text-lg font-light text-primaryBlue mx-1`}>
                Outstanding Balance
              </Text>
            </View>
            <View style={tw`flex-1 flex justify-center items-center`}>
              <Text style={tw`text-2xl font-light text-black/60`}>6450</Text>
            </View>
          </View>
        </View>

        <View style={tw`flex flex-row justify-between`}>
          <View
            style={tw`h-40 flex-1 bg-red-50 m-3 rounded-3xl flex justify-center items-center shadow-xl`}
          >
            <View style={tw`flex-1 flex justify-end items-center`}>
              <Text
                style={tw`text-base font-light text-primaryBlue mx-1 text-center`}
              >
                Minimum Degree Requirement
              </Text>
            </View>
            <View style={tw`flex-1 flex justify-center items-center`}>
              <Text style={tw`text-2xl font-light text-black/60`}>2.50</Text>
            </View>
          </View>
          <View
            style={tw`h-40 flex-1 bg-green-50 m-3 rounded-3xl flex justify-center items-center shadow-xl`}
          >
            <View style={tw`flex-1 flex justify-end items-center`}>
              <Text style={tw`text-base font-light text-primaryBlue mx-1`}>
                Required Credit Hours
              </Text>
            </View>
            <View style={tw`flex-1 flex justify-center items-center`}>
              <Text style={tw`text-2xl font-light text-black/60`}>150</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={tw`px-4 text-xl my-5 font-normal`}>Quick Action</Text>
          <ButtonGroup />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

{
  /* 
      <View>
          <Text style={tw`px-4 text-xl my-5 font-normal`}>
            Today's Class Schedule
          </Text>
          <DailyClass />
      </View> 
  */
}
