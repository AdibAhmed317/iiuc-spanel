import { View, Text, ScrollView, FlatList } from 'react-native';
import { transactions } from '@assets/data/btn-data';
import CustomButton from '@components/custom-button';
import tw from '@lib/tailwind';

const PaymentSlip = () => {
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
        ID
      </Text>
      <Text
        style={tw`w-40 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Name
      </Text>
      <Text
        style={tw`w-24 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Date
      </Text>
      <Text
        style={tw`w-20 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Reference
      </Text>
      <Text
        style={tw`w-50 p-2 text-center font-semibold border-r border-gray-200`}
      >
        MR
      </Text>
      <Text
        style={tw`w-28 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Account
      </Text>
      <Text
        style={tw`w-28 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Amount
      </Text>
      <Text
        style={tw`w-24 p-2 text-center font-semibold border-r border-gray-200`}
      >
        Action
      </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={tw`flex flex-row border-b border-gray-200 `}>
      <Text style={tw`w-12 p-2 text-center border-r border-gray-200`}>
        {item.id}
      </Text>
      <Text style={tw`w-32 p-2 text-center border-r border-gray-200`}>
        {item.studentId}
      </Text>
      <Text style={tw`w-40 p-2 text-center border-r border-gray-200`}>
        {item.name}
      </Text>
      <Text style={tw`w-24 p-2 text-center border-r border-gray-200`}>
        {item.date}
      </Text>
      <Text style={tw`w-20 p-2 text-center border-r border-gray-200`}>
        {item.ref}
      </Text>
      <Text style={tw`w-50 p-2 text-center border-r border-gray-200`}>
        {item.transactionId}
      </Text>
      <Text style={tw`w-28 p-2 text-center border-r border-gray-200`}>
        {item.bank}
      </Text>
      <Text style={tw`w-28 p-2 text-center border-r border-gray-200`}>
        {item.amount}
      </Text>
      <View
        style={tw`w-24 p-2 text-center font-semibold border-r border-gray-200`}
      >
        <CustomButton
          title='MRP Print'
          containerStyles='bg-primaryBlue border border-gray-300 rounded-lg p-1 m-1 shadow-md'
          textStyles='text-white/80 font-medium text-xs'
        />
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView horizontal>
        <View style={tw`w-full mt-10`}>
          <FlatList
            data={transactions}
            renderItem={renderItem}
            keyExtractor={(item) => item.sl}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={tw`mt-5 mb-80 pb-80`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentSlip;
