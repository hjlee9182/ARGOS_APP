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
  })
});

export default createAppContainer(switchNavigator);