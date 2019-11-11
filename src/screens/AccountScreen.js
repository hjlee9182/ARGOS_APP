import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
const AccountScreen = () =>{
    return (
    <SafeAreaView forceInset={{top:'always'}}>
    <Text style = {{fontSize:48}}>AccountScreen</Text>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
});

export default AccountScreen;