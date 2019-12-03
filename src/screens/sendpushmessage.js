import React from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';


const PUSH_REGISTRATION_ENDPOINT = 'http://7f59c70f.ngrok.io/token';
const MESSAGE_ENPOINT = 'http://7f59c70f.ngrok.io/message';

export default class sendpushmessage extends React.Component {
    state = {
      notification: null,
      messageText: ''
    }
   // Defined in following steps
   registerForPushNotificationsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      return;
    }
    let token = await Notifications.getExpoPushTokenAsync();
    // Defined in following steps
    return fetch(PUSH_REGISTRATION_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: {
            value: token,
          },
          user: {
            username: 'warly', //임의값
            name: 'Dan Ward'   //임의값
          },
        }),
      });
      this.notificationSubscription = Notifications.addListener(this.handleNotification);
  }
  componentDidMount() {
    this.registerForPushNotificationsAsync();
  }
  
  handleNotification = (notification) => {
    this.setState({ notification });
  }
  handleChangeText = (text) => {
    this.setState({ messageText: text });
  }
  sendMessage = async () => {
    fetch(MESSAGE_ENPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: this.state.messageText,
      }),
    });
    this.setState({ messageText: '' });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.messageText}
          onChangeText={this.handleChangeText}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.sendMessage}
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        {this.state.notification ?
          this.renderNotification()
        : null}
      </View>
    );
  }
  }

 

const styles = StyleSheet.create({
});
