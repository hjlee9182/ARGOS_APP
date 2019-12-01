import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import { AsyncStorage } from 'react-native';

const PersonalInformation = ({navigation}) =>{
    return (
    <SafeAreaView forceInset={{top:'always'}}>
    <Text style = {{fontSize:48}}>PersonalInformation</Text>
    <Button title="logout" onPress={ async ()=>{
      await  AsyncStorage.removeItem('userToken');
      navigation.navigate('Signin');
    }}/>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
});

export default PersonalInformation;
