import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PersonalInformation from './src/screens/PersonalInformation';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import SeminarScreen from './src/screens/SeminarScreen';
import PushAlarmScreen from './src/screens/PushAlarmScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import BoardScreen from './src/screens/BoardScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {BlogProvider} from './src/screens/context/BlogContext'


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === '푸시알람') {
    iconName = `ios-paper-plane${focused ? '' : ''}`;
  }
  else if (routeName === '마이페이지') {
    iconName = `ios-person${focused ? '' : ''}`;
  }
  else if (routeName === '게시판') {
    iconName = `ios-clipboard${focused ? '' : ''}`;
  }
  else if (routeName === '세미나') {
    iconName = `ios-create${focused ? '' : ''}`;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const switchNavigator = createSwitchNavigator({
  loginFlow : createStackNavigator({
    Signin: SigninScreen,
    Signup:SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    게시판: createStackNavigator({
      BoardScreen: BoardScreen,
      TrackDetail : TrackDetailScreen
    }),
    세미나 : SeminarScreen,
    마이페이지:PersonalInformation,
    푸시알람 : PushAlarmScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }
  )},
  )
});

//export default createAppContainer(switchNavigator);
const App = createAppContainer(switchNavigator);
export default()=>{
  return (
  <BlogProvider><App/></BlogProvider>);
  
}