import React from 'react';
import {View,StyleSheet,Text,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons'
import { AsyncStorage } from 'react-native';


class admincheck extends React.Component{

    constructor(props,navigation) {
      super(props);
      this.state = {
        text: '',
        email: ''
      };
      this.a(navigation);
      }
  
      a = async (navigation) =>{
      const b = await AsyncStorage.getItem('userToken');
      this.state = { text : b,
                    email : ''
                };
      this.abc(navigation);
      }
  
      abc(navigation){
          console.log("isrun?")
        const { text }  = this.state.text ;
        fetch('http://112.166.141.161/react_admin_check.php', {
  
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: this.state.text
         })
       }).then((response) => response.json())
             .then((responseJson) => {
                if(responseJson === 'Data Matched')
                {   this.props.navigate('sendpushmessage');
                }
                else{
                  Alert.alert(responseJson);
                }
             }).catch((error) => {
               console.error(error);
             });
    }
  
  }


const PushAlarmScreen = () =>{
    
    return (

    <Text style = {{fontSize:48}}>PushAlarmScreen</Text>
