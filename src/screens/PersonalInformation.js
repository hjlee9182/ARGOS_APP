import React from 'react';

import {View,StyleSheet,Text,Button,Alert} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import { AsyncStorage } from 'react-native';


class PersonalInformation extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      text: '',
      id: '',
      email: ''
    };
    this.a();
    }

    a = async () =>{
    const b = await AsyncStorage.getItem('userToken');
    this.setState({ text : b });
    this.abc();
    }

    abc = () =>{
      console.log("hi");
      const { text }  = this.state.text ;
      fetch('http://112.166.141.161/react_myinfo.php', {

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
             // If server response message same as Data Matched
              this.setState({ id : responseJson[0] });
              this.setState({ email : responseJson[1] });

           }).catch((error) => {
             console.error(error);
           });
       }


  render() {
    return (
      <SafeAreaView forceInset={{top:'always'}}>
      <Text style = {{fontSize:48}}>PersonalInformation</Text>
      <Text style = {{fontSize:24}}>id : { this.state.id }</Text>
      <Text style = {{fontSize:24}}>email : { this.state.email }</Text>
      <Button title="logout" onPress={ async ()=>{
        await  AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Signin')
      }}/>
      </SafeAreaView>
    );
  }

}
const styles = StyleSheet.create({
});

export default PersonalInformation;
