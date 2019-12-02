import React from 'react';
import {View,StyleSheet,Text,Button, TextInput, Alert} from 'react-native';
import { AsyncStorage } from 'react-native';

class LoginActiviti extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        UserEmail: '',
        UserPassword: ''
      }
    }

    UserLoginFunction = () =>{
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;


 fetch('http://112.166.141.161/react_login.php', {

   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     email: UserEmail,
     password: UserPassword
  })
}).then((response) => response.json())
      .then((responseJson) => {
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
            this._signInAsync();
        }
        else{
          Alert.alert(responseJson);
        }
      }).catch((error) => {
        console.error(error);
      });
  }
 // 인증 정보 저장
 _signInAsync = async () => {
   await AsyncStorage.setItem('userToken', this.state.UserEmail );
   this.props.navigation.navigate('mainFlow');
 };
 render() {
   return (
     <>
    <TextInput
      placeholder="Enter User Email"
      onChangeText={UserEmail => this.setState({UserEmail})}
      underlineColorAndroid='transparent'
      style={styles.TextInputStyleClass}
    />
    <TextInput
      placeholder="Enter User Password"
      onChangeText={UserPassword => this.setState({UserPassword})}
      underlineColorAndroid='transparent'
      style={styles.TextInputStyleClass}
      secureTextEntry={true}
    />
    <Button title="Click Here To Login" onPress={
        this.UserLoginFunction
    } color="#2196F3" />

     <Text style = {{fontSize:48}}>SigninScreen</Text>
     <Button
     title ="Go to Signup"
     onPress={()=>this.props.navigation.navigate('Signup')}></Button>

     <Button
     title ="Go to mainFlow"
     onPress={()=>this.props.navigation.navigate('mainFlow')}></Button>
     </>
   );
 }

}
const styles = StyleSheet.create({});

export default LoginActiviti;
