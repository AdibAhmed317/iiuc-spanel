import { View, Text, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import tw from '@lib/tailwind';

const DrawerMenuItem = ({ title, subItems, isExpanded, onToggleExpand }) => {
  return (
    <View style={tw`mb-4`}>
      <TouchableOpacity
        style={tw`flex-row justify-between items-center p-3 bg-slate-50 rounded-md`}
        onPress={onToggleExpand}
      >
        <Text style={tw`text-sm text-gray-800 font-medium`}>{title}</Text>
        <AntDesign
          name={isExpanded ? 'up' : 'down'}
          size={16}
          color='gray'
          style={tw`ml-2`}
        />
      </TouchableOpacity>

      {isExpanded && (
        <View style={tw`pl-6 mt-2`}>
          {subItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`py-2`}
              onPress={() => router.push(item.route)}
            >
              <Text style={tw`text-gray-600`}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default DrawerMenuItem;
