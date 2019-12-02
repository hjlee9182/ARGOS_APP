import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const BoardScreen = ({navigation}) =>{
    return <>
    <Text style = {{fontSize:48}}>BoardScreen</Text>
    <Button 
    title ="공지사항"
    onPress={()=>navigation.navigate('Notice',{site:"notice"})}></Button>
     <Button 
    title ="자유게시판"
    onPress={()=>navigation.navigate('freeboard',{site:"free"})}></Button>
    </>
};

const styles = StyleSheet.create({});

export default BoardScreen;