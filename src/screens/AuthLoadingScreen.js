import React from 'react';
import {View,StyleSheet,Text,Button, ActivityIndicator, StatusBar } from 'react-native';
import { AsyncStorage } from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'mainFlow' : 'Signin');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default AuthLoadingScreen;
