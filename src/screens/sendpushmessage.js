import React from 'react';
import {View,StyleSheet,Text,TextInput, Alert} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import {EvilIcons} from '@expo/vector-icons'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import PushAlarmScreen from './PushAlarmScreen';

class msg extends React.Component{

  constructor(props,navigation) {
    super(props);
    this.state = {
      who: '',
      message: '',
      data: ''
    };
    }
    getid = async (messageText) =>{
    const b = await AsyncStorage.getItem('userToken');
    this.state = { who : b,
                  message : ''
              };
        this.savemsg(messageText);
    }
    savemsg = async (messageText) =>{
      const { who }  = this.state.who ;
      const { message  } = messageText;
      console.log(this.state.who);
      console.log(messageText);
      fetch('http://112.166.141.161/react_pushsave.php', {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          who: this.state.who,
          message : messageText
       })
     }).then((response) => response.json())
           .then((responseJson) => {
              if(responseJson === 'Data Matched')
              {   
                this.state.data = responseJson[0];
              }
              else{
                Alert.alert(responseJson);
              }
           }).catch((error) => {
             console.error(error);
           });
  }
}
const PUSH_REGISTRATION_ENDPOINT = 'http://8aeb71bd.ngrok.io/token';
const MESSAGE_ENPOINT = 'http://8aeb71bd.ngrok.io/message';


export default class sendpushmessage extends React.Component {
  
    constructor(props,navigation) {
    super(props);
    this.state = {
      notification: null,
      messageText: '',
      isloding: true
    };
    obj = new msg();
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
    obj.getid(this.state.messageText);
    
  }

  renderRow = ({item}) => {
    return(
      <View>
        <Text> {item.who} {item.message}  {item.time} </Text>
      </View>
    )
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

        <FlatList
        data={ this.state.data }
        renderItem={this.renderRow}
        keyExtractor={(item,index)=>index.toString()}
        />

      </View>
      
    );
  }
  }

const styles = StyleSheet.create({
});
