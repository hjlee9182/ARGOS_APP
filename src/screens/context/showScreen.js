import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import {Context} from '../context/BlogContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons'


const ShowScreen = ({navigation}) =>{

    const {state} = useContext(Context);
    
    const blogPost = state.find(
        (blogPost)=>blogPost.id===navigation.getParam('id'));

    return (<View>
        <Text style={styles.text}>{blogPost.content}</Text>
    </View>)
}

ShowScreen.navigationOptions = ({navigation}) =>{
    console.log(navigation)
    return {
        headerRight: (
        <TouchableOpacity 
        onPress={()=>
        navigation.navigate('Edit',{id:navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35}/>
        </TouchableOpacity>),
        title: navigation.state.params.navigationOptions.title
    };
};
const styles = StyleSheet.create({
    text:{
        fontSize : 25,
        width : 400,
        height: 300,
    textAlign:"center",
    marginTop : 50
    }
})

export default ShowScreen;