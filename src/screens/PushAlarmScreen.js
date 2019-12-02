import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons'

const PushAlarmScreen = () =>{
    return (
    <Text style = {{fontSize:48}}>PushAlarmScreen</Text>
    );
};

const styles = StyleSheet.create({
});

PushAlarmScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: (
        <TouchableOpacity 
        onPress={()=>
        navigation.navigate('sendpushmessage')}>
            <EvilIcons name="bell" size={35}/>
        </TouchableOpacity>),
        title: "푸시 알람"
    };
};
export default PushAlarmScreen;