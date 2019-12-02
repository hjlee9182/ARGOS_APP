import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
const BoardScreen = ({navigation}) =>{
    return (
        
        <>
        <Text style = {{fontSize:48}}>BoardScreen</Text>
        <Button 
        style={styles.item}
        title ="공지사항"
        type="outline"
        onPress={()=>navigation.navigate('Notice',{site:"notice"})}></Button>
         <Button 
        title ="자유게시판"
        onPress={()=>navigation.navigate('freeboard',{site:"free"})}></Button>
        </>
    );

};

const styles = StyleSheet.create({
    item: {
        borderRadius: 10,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        alignItems: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        }
      },
});

export default BoardScreen;