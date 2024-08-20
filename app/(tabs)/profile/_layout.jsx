import { Platform, SafeAreaView, StatusBar, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Overview from './overview';
import Contact from './contact';
import Advisor from './advisor';
import Syllabus from './syllabus';

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            marginTop: Platform.OS === 'android' ? insets.top : 0,
          }}
        >
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                height: 40,
                backgroundColor: '#313477',
                borderRadius: 8,
                margin: 10,
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: '#ffffff',
              tabBarIndicatorStyle: {
                backgroundColor: '#ffffff',
                height: '100%',
                borderRadius: 5,
              },
              tabBarItemStyle: {
                borderRadius: 8,
                overflow: 'hidden',
              },
              tabBarLabelStyle: {
                textTransform: 'none',
              },
              tabBarContentContainerStyle: {
                alignItems: 'center',
                justifyContent: 'center',
              },
            }}
          >
            <Tab.Screen name='Overview' component={Overview} />
            <Tab.Screen name='Contact' component={Contact} />
            <Tab.Screen name='Advisor' component={Advisor} />
            <Tab.Screen name='Syllabus' component={Syllabus} />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;
