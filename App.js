import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PersonalInformation from './src/screens/PersonalInformation';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import SeminarScreen from './src/screens/SeminarScreen';
import PushAlarmScreen from './src/screens/PushAlarmScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import BoardScreen from './src/screens/BoardScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {Provider} from './src/screens/context/BlogContext'
import ShowScreen from './src/screens/context/showScreen'
import CreateScreen from './src/screens/context/CreateScreen'
import EditScreen from './src/screens/context/EditScreen'
import freeboard from './src/screens/freeboard'
import findperson from './src/screens/Findperson'
import sendpushmessage from './src/screens/sendpushmessage'

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

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
  loginFlow : createStackNavigator({
    Signin: SigninScreen,
    Signup:SignupScreen}),
  mainFlow: createBottomTabNavigator({
    게시판: createStackNavigator({
      BoardScreen: BoardScreen,
      TrackDetail : TrackDetailScreen,
        Show : ShowScreen,
        Create :CreateScreen,
        Edit:EditScreen,
        freeboard : freeboard
    },
    ),
    세미나 : SeminarScreen,
    마이페이지: createStackNavigator({
      PersonalInformation : PersonalInformation,
      findperson : findperson
    }),
    푸시알람 : createStackNavigator({
      Push : PushAlarmScreen,
      sendpushmessage : sendpushmessage
    })
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),})
  },
  {
   initialRouteName: 'AuthLoading',
 },
    {
      test: createStackNavigator({
        TrackDetail : TrackDetailScreen,
        Show : ShowScreen,
        Create :CreateScreen,
        Edit:EditScreen
        
    })}

  )
});

/*
const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
  loginFlow : createStackNavigator({
    Signin: SigninScreen,
    Signup:SignupScreen}),
  mainFlow: createBottomTabNavigator({
    게시판: createStackNavigator({
      BoardScreen: BoardScreen,
      TrackDetail : TrackDetailScreen,
        Show : ShowScreen,
        Create :CreateScreen,
        Edit:EditScreen
    },
    {
      BoardScreen: BoardScreen,
      freeboard : freeboard
    }),
    세미나 : SeminarScreen,
    마이페이지:PersonalInformation,
    푸시알람 : PushAlarmScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),})
  },
  {
   initialRouteName: 'AuthLoading',
 },
    {
      test: createStackNavigator({
        TrackDetail : TrackDetailScreen,
        Show : ShowScreen,
        Create :CreateScreen,
        Edit:EditScreen
        
    })}

  )
});
*/
//export default createAppContainer(switchNavigator);
const App = createAppContainer(switchNavigator);
export default()=>{
  return (
  <Provider><App/></Provider>);
  
}
