import React from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

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
const PUSH_REGISTRATION_ENDPOINT = 'http://e26cdb95.ngrok.io/token';
const MESSAGE_ENPOINT = 'http://e26cdb95.ngrok.io/message';


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

  render() {
       return (
      <View style={styles.container}>
        <View style={{borderWidth :1, width : "70%",
        marginBottom : 10, marginTop : 50
  }}>
        <TextInput
        placeholder="Enter send message"
          value={this.state.messageText}
          onChangeText={this.handleChangeText}
          style={{
            textAlign : "center",
            backgroundColor: '#ffffff',
            paddingLeft: 15,
            paddingRight: 15}}
        />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.sendMessage}
        >
          <Text style={styles.bt}>Send</Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical : 'center'
  },
  bt:{
    backgroundColor: 'navy',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 15,
    fontWeight: "800",
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    
   }
});
