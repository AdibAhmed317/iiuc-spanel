import { View, Text } from 'react-native';

import tw from '@lib/tailwind';

const DailyClass = () => {
  const currentDate = new Date();

  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = dayNames[currentDate.getDay()];
  const date = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];

  return (
    <View style={tw`flex flex-row px-4 min-h-20`}>
      <View
        style={tw`flex-1 bg-yellow-200 mx-1 rounded-xl flex justify-center items-center shadow-lg`}
      >
        <Text style={tw`text-black/60`}>{day},</Text>
        <Text style={tw`text-black/60`}>
          {date} {month}
        </Text>
      </View>
      <View style={tw`flex-2`}>
        <View
          style={tw`bg-blue-50 m-2 rounded-xl flex justify-center items-start shadow-lg px-5`}
        >
          <View style={tw`my-3 flex flex-col items-start`}>
            <Text style={tw`text-sm text-black/60`}>Algorithm</Text>
            <Text style={tw`text-xs text-black/60`}>08:30 PM - 10:30 PM </Text>
            <Text style={tw`text-xs text-black/60`}>Room: DN101 </Text>
          </View>
        </View>
        <View
          style={tw`bg-blue-50 m-2 rounded-xl flex justify-center items-start shadow-lg px-5`}
        >
          <View style={tw`my-3 flex flex-col justify-center items-start`}>
            <Text style={tw`text-sm text-black/60`}>Advance Database</Text>
            <Text style={tw`text-xs text-black/60`}>11:00 PM - 01:00 PM </Text>
            <Text style={tw`text-xs text-black/60`}>Room: DN101 </Text>
          </View>
        </View>
        <View
          style={tw`bg-blue-50 m-2 rounded-xl flex justify-center items-start shadow-lg px-5`}
        >
          <View style={tw`my-3 flex flex-col justify-center items-start`}>
            <Text style={tw`text-sm text-black/60`}>Theory of Computation</Text>
            <Text style={tw`text-xs text-black/60`}>02:00 PM - 04:00 PM </Text>
            <Text style={tw`text-xs text-black/60`}>Room: DN101 </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DailyClass;
