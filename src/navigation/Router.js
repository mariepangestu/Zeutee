import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Remind, ConcertDetail} from '../pages';
import {Activity, CalendarAdd, ProfileCircle} from 'iconsax-react-native';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#c4bfbf',
        tabBarStyle: styles.tabcontainer,
        tabBarLabelStyle: styles.tablabel,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Activity
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Remind"
        component={Remind}
        options={{
          tabBarLabel: 'Remind',
          tabBarIcon: ({focused, color}) => (
            <CalendarAdd
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <ProfileCircle
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConcertDetail"
        component={ConcertDetail}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  tabcontainer: {
    backgroundColor: '#000000',
    paddingBottom: 10,
    paddingTop: 11,
    height: 55,
  },
  tablabel: {
    marginTop: 5,
    fontSize: 10,
    fontFamily: 'Pjs-Medium',
  },
});
