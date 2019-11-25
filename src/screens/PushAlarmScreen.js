import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
const PushAlarmScreen = () =>{
    return (
    <SafeAreaView forceInset={{top:'always'}}>
    <Text style = {{fontSize:48}}>PushAlarmScreen</Text>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
});

export default PushAlarmScreen;