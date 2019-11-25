import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const BoardScreen = ({navigation}) =>{
    return <>
    <Text style = {{fontSize:48}}>BoardScreen</Text>
    <Button 
    title ="Go to Track Detail"
    onPress={()=>navigation.navigate('TrackDetail')}></Button>
    </>
};

const styles = StyleSheet.create({});

export default BoardScreen;