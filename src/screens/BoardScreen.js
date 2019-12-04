import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
const BoardScreen = ({navigation}) =>{
    return (
      <View style={styles.container}>
        <View style={styles.case1} >
        <Text style={{fontSize: 35,fontWeight:'bold',marginTop:40}}>
            게시판 목록
            </Text>
          </View>
        <View style={{ flex: 1,
          flexDirection:"row", 
          justifyContent: "space-between"
        }}>

          <TouchableOpacity 
          style={ styles.item_left}
          onPress={()=>navigation.navigate('Notice',{site:"notice"})}>
          <Text style={{fontSize: 24,fontWeight:'bold',color:"white"}}>
            공지사항
            </Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.item_right}
          onPress={()=>navigation.navigate('freeboard',{site:"free"})}>
          <Text style={{fontSize: 24,fontWeight:'bold'}}>
          자유게시판</Text></TouchableOpacity>
    
        </View>
        <View style={styles.case2} />
        <View style={styles.case3} />
      </View>
        
    );

};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  case1: {
    justifyContent: 'center',
      alignItems: 'center',
    flex: 1,
  },
  case2: {
    flex: 1,
  },
  case3: {
    flex: 1,
  },
  button_style:{
    marginLeft:20,
    width : 170,
    
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},
button_container: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop : 40,
  marginBottom:30
},

    item_left: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:20,
      width:150,
      height: 150,
          backgroundColor:"navy",
        borderRadius: 10,
        marginTop: 17,
        alignItems: 'center',
        shadowRadius: 3,
        shadowOffset:{  width: 10,  height: 10,  },
      shadowColor: 'black',
      shadowOpacity: 1.0, 
        textAlign:"center"
      },
      item_right: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:20,
        width:150,height: 150,
            backgroundColor:"#99CCFF",
          borderRadius: 10,
          marginTop: 17,
          alignItems: 'center',
          shadowRadius: 3,
          shadowOpacity: 0.8,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3
          }
        }
});

export default BoardScreen;