import React from 'react';
import {View,StyleSheet,Text,Header} from 'react-native';
import {SafeAreaView} from 'react-navigation';
const PersonalInformation = () =>{

    return (
    <SafeAreaView forceInset={{top:'always' }}>
    <Text style = {{fontSize:48}}>PersonalInformation</Text>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
});

export default PersonalInformation;