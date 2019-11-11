import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const SigninScreen = ({navigation}) =>{
    return (
    <>
    <Text style = {{fontSize:48}}>SigninScreen</Text>
    <Button 
    title ="Go to Signup"
    onPress={()=>navigation.navigate('Signup')}></Button>
    <Button 
    title ="Go to mainFlow"
    onPress={()=>navigation.navigate('mainFlow')}></Button>
    </>
    );
    };

const styles = StyleSheet.create({});

export default SigninScreen;