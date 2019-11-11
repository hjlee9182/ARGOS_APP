import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
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
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Signin')}>
        <Spacer>
    <Text style={styles.link}>Already have an account? Sign in instead</Text>
        </Spacer>
    </TouchableOpacity>
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
    link:{
        color:'blue'
    }
    
});

export default SignupScreen;