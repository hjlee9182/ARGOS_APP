import React from 'react';
import {View,StyleSheet,Text,Alert,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons'
import { AsyncStorage } from 'react-native';
import { Constants } from 'expo'


class admincheck extends React.Component{

    constructor(props,navigation) {
      super(props);
      this.state = {
        text: '',
        email: ''
      };
      this.a(navigation);
      }
  
      a = async (navigation) =>{
      const b = await AsyncStorage.getItem('userToken');
      this.state = { text : b,
                    email : ''
                };
      this.abc(navigation);
      }
  
      abc(navigation){
        const { text }  = this.state.text ;
        fetch('http://112.166.141.161/react_admin_check.php', {
  
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: this.state.text
         })
       }).then((response) => response.json())
             .then((responseJson) => {
                if(responseJson === 'Data Matched')
                {   this.props.navigate('sendpushmessage');
                }
                else{
                  Alert.alert(responseJson);
                }
             }).catch((error) => {
               console.error(error);
             });
    }

  }


export default class PushAlarmScreen extends React.Component{ 

  constructor(props,navigation) {
    super(props);
    this.state = {
      notification: null,
      messageText: '',
      data: '',
      abcd: '',
      isloding: true
    };
    this.getmsg();
    
    }

  getmsg(){
    console.log("hh");
    fetch('http://112.166.141.161/react_pushget.php', {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text : 'hi'
     })
   }).then((response) => response.json())
         .then((responseJson) => {
            this.state.data = "";
            this.setState({
              data : responseJson[0]
            })
            

         }).catch((error) => {
           console.error(error);
         });
  }

  renderRow = ({item}) => {
    return(
      <View style={styles.item}>
        <Text style={styles.text}> {item.who} {item.message}  {item.time} </Text>
      </View>
    )
  }

  render(){
   //this.getmsg();
    return(
      <>
      <FlatList style={styles.container}
      data={ this.state.data }
      renderItem={this.renderRow}
      keyExtractor={(item,index)=>index.toString()}
      />
      </>
    );
  }
}

PushAlarmScreen.navigationOptions = ({navigation}) =>{
    
    
    return {
        headerRight: (
        <TouchableOpacity 
        onPress={()=>
            b = new admincheck(navigation)}>
            <EvilIcons name="bell" size={35}/>
        </TouchableOpacity>),
        title: "푸시 알람"
    };
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 50,

    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
   
  }
});