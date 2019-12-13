import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import {Context} from '../context/BlogContext'

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