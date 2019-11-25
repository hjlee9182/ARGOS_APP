import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PersonalInformation from './src/screens/PersonalInformation';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import SeminarScreen from './src/screens/SeminarScreen';
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
    BoardScreen: createStackNavigator({
      BoardScreen: BoardScreen,
      TrackDetail : TrackDetailScreen
    }),
    SeminarScreen : SeminarScreen,
    PersonalInformation:PersonalInformation
  })
});

export default createAppContainer(switchNavigator);