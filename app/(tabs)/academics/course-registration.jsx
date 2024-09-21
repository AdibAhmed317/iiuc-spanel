import tw from '@lib/tailwind';
import { View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const CourseRegistration = () => {
  const tableHead = ['Head1', 'Head2', 'Head3', 'Head4'];
  const tableData = [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
  ];

  return (
    <Table>
      <Row data={tableHead} textStyle={tw`text-center font-bold`} />
      <Rows data={tableData} textStyle={tw`text-center`} />
    </Table>
  );
};

export default CourseRegistration;
