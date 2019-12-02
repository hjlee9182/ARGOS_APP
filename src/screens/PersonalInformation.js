import React from 'react';

import {View,StyleSheet,Text,Button,Alert,Image} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons'
import { stopLocationUpdatesAsync } from 'expo-location';


class PersonalInformation extends React.Component{


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
    return (<>
      <View stlye={    
      {justifyContent: 'center',
      alignItems: 'center',
      }}>
      <Image 
      style = {styles.image_style}
      source = {require('../../assets/icon.png')}/>
      </View>
      <Text style = {{fontSize:24}}>name : { this.state.name }</Text>
      <Text style = {{fontSize:24}}>id : { this.state.id }</Text>
      <Text style = {{fontSize:24}}>email : { this.state.email }</Text>
      <Text style = {{fontSize:24}}>Join_us : { this.state.join }</Text>
      <Text style = {{fontSize:24}}>admission : { this.state.admission }</Text>
      <Button title="logout" onPress={ async ()=>{
        await  AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Signin')
      }}/></>
      
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

PersonalInformation.navigationOptions = ({navigation}) =>{
  return {
      headerRight: (
      <TouchableOpacity 
      onPress={()=>
      navigation.navigate('findperson')}>
          <EvilIcons name="search" size={35}/>
      </TouchableOpacity>),
      title: "마이 페이지"
  };
};

export default PersonalInformation;
