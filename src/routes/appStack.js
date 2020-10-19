import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../../Auth/SplashScreen';
import GetStarted from '../../Auth/GetStarted';
import Login from '../../Auth/Login';
import ResetPassword from '../../Auth/ResetPassword';
import Registration from '../../Auth/Registration';
import Homepage from '../screen/Homepage';
import DrawerContent from '../screen/DrawerContents';
import Todo1 from '../screen/Todo1';
import Todo2 from '../screen/Todo2';
import Todo3 from '../screen/Todo3';
import Icon from '../component/Icon';
import profile from '../screen/profile.js';
import todoex from '../screen/todoex';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// const MyTabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Homepage} />
//       <Tab.Screen name="Todo1" component={Todo1} />
//       <Tab.Screen name="Todo2" component={Todo2} />
//       <Tab.Screen name="Todo3" component={Todo3} />
//     </Tab.Navigator>
//   );
// };

const MyTabs = () => {
  const customTabBarStyle = {
    activeTintColor: '#0091EA',
    inactiveTintColor: 'gray',
    style: {backgroundColor: 'white'},
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      tabBarOptions={customTabBarStyle}
      shifting="false">
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
        component={Homepage}
      />
      <Tab.Screen
        name="Todo1"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Icon name="Todo1" color={color} size={26} />
          ),
        }}
        component={Todo1}
      />
      <Tab.Screen
        name="profile"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0, // untuk memberikan efek melayang atau space
                height: 68,
                width: 68,

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="k" color={color} size={68} />
            </View>
          ),
        }}
        component={profile}
      />
      <Tab.Screen
        name="Todo2"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Icon name="Todo2" color={color} size={26} />
          ),
        }}
        component={Todo2}
      />
      <Tab.Screen
        name="Todo3"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Icon name="Todo3" color={color} size={26} />
          ),
        }}
        component={Todo3}
      />
      <Tab.Screen
        name="todoex"
        options={{
          tabBarLabel: 'yuhu',
          // tabBarIcon: ({color}) => (
          // <Icon name="Todo3" color={color} size={26} />
          // ),
        }}
        component={todoex}
      />
    </Tab.Navigator>
  );
};

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Homepage" component={MyTabs} />
    </Drawer.Navigator>
  );
};

class firstStack extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={false}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Homepage" component={RootDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default firstStack;
