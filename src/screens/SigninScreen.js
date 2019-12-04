import * as React from 'react';
import {View,StyleSheet,Text,Button, Input,TextInput, Alert,TouchableOpacity} from 'react-native';
import { AsyncStorage } from 'react-native';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';

const BLUE = "#428aF8";
const LIGHT_GRAY = "#D3D3D3";
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
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', this.state.UserEmail );
    this.props.navigation.navigate('mainFlow');
  };
 
 render() {
   return (
     <View style = {styles.container}>
       <Spacer>
       <Text style={{fontSize:50,textAlign:"center"}}>ARGOS</Text>
       </Spacer>
       
       <Spacer>
    <TextInput
      label="Id"
      placeholder="Enter User ID"
      onChangeText={UserEmail => this.setState({UserEmail})}
      underlineColorAndroid='transparent'
    />
    </Spacer>
    <Spacer>
    <TextInput
    label="Password"
      placeholder="Enter User Password"
      onChangeText={UserPassword => this.setState({UserPassword})}
      secureTextEntry={true}
      underlineColorAndroid="transparent"
    /></Spacer>
    <Spacer>
    <View >
        <TouchableOpacity 
        style={{
        }}
        onPress={this.UserLoginFunction}>
          <Text style={styles.bt}>Login!</Text>
        </TouchableOpacity>
      </View>
    </Spacer>
     {/* <Button
     title ="Go to Signup"
     onPress={()=>this.props.navigation.navigate('Signup')}></Button> */}
    
     </View>
   );
 }

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:250
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

export default LoginActiviti;
