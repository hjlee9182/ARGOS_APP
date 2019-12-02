import React from 'react';

import {View,StyleSheet,Text,Button,Alert,Image,TextInput} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons'
import { stopLocationUpdatesAsync } from 'expo-location';


class Findperson extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      text: '',
      name: '',
      id: '',
      email: '',
      join: '',
      admission: '',

    };
    }
    abc = () =>{
      const { text }  = this.state.text ;
      
      fetch('http://112.166.141.161/react_find.php', {

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
             
              console.log(responseJson);
              this.setState({ name : responseJson[0] });
              this.setState({ id : responseJson[1] });
              this.setState({ email : responseJson[2] });
              this.setState({ join : responseJson[4] });
              this.setState({ admission : responseJson[5] });
              

           }).catch((error) => {
             console.error(error);
           });
       }


  render() {
    return (
    <>
        <Text style = {{fontSize:48}}>Findperson</Text>
        <TextInput
            placeholder="Enter User Password"
            onChangeText={text => this.setState({text})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
        />
          <Text style = {{fontSize:24}}>name : { this.state.name }</Text>
        <Text style = {{fontSize:24}}>id : { this.state.id }</Text>
        <Text style = {{fontSize:24}}>email : { this.state.email }</Text>
        <Text style = {{fontSize:24}}>Join_us : { this.state.join }</Text>
        <Text style = {{fontSize:24}}>admission : { this.state.admission }</Text>
        <Button title="send" onPress={
        this.abc }/>
      
        
        <Text style={{fontSize:30}}>{}</Text>
    </>
      
    );
  }

}
const styles = StyleSheet.create({
  image_style :{
    height : 150 ,
    width : 150,
    marginTop : 50,
    justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
  }
});


export default Findperson;