import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';
const SignupScreen = ({navigation}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
    <View style={styles.container}>
    <Spacer>
    <Text h3> Sign Up for ARGOS</Text>
    </Spacer>
    <Input 
    label="Email" 
    value={email}  
    onChangeText = {setEmail}
    autoCapitalize="none"
    autoCorrect={false} />
    <Spacer/>
    <Input 
    secureTextEntry
    label="Password"
    value={password}
    onChangeText= {setPassword}
    autoCapitalize="none"
    autoCorrect={false}
    />
    <Spacer>
    <Button title="Sign up"/>
    </Spacer>
    <NavLink
    routeName="Signin"
    text = "Already have an account Sign in instead!"
    />
    </View>
    );
};

SignupScreen.navigationOptions = ()=>{
    return{
        header: null
    };
};

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    marginBottom:250
    },
   
    
});

export default SignupScreen;