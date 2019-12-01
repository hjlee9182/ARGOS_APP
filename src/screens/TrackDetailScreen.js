import React, { useContext ,useEffect} from 'react';
import {View,StyleSheet,Text,FlatList,Button} from 'react-native';
import {Context} from './context/BlogContext'
import {Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const TrackDetailSCreen = ({navigation}) =>{
    const {state,deleteBlogPost,getBlogPosts} = useContext(Context);
    
    useEffect(()=>{
        getBlogPosts();

       const listener =  navigation.addListener('didFocus',()=>{
            getBlogPosts();
        });

        return ()=>{
            listener.remove();
        }
    },[])
    return (<View>
    <FlatList
    data = {state}
    keyExtractor={(blogPost)=>blogPost.title}
    renderItem={({item})=>{
        return (
        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
            <View style={styles.row}>
            <Text style={styles.title}>{item.title}-{item.id}</Text>
            <TouchableOpacity activeOpacity={1} onPress={()=>{
                if(!this.preventDefault){
                deleteBlogPost(item.id)}}}>
            <Feather size={30} name = "trash"/>
            </TouchableOpacity>
            </View>
        </TouchableOpacity>
        )
    }}
    />
    </View>)
    };

TrackDetailSCreen.navigationOptions = ({navigation}) =>{
    return {

        headerRight: 
        (<TouchableOpacity onPress={()=>navigation.navigate('Create')}>
        <Feather name="plus" size={30}/>
        </TouchableOpacity>),
        title: "공지사항"
    };
}

const styles = StyleSheet.create({
    row :{
        flexDirection : 'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize :18
    },
    icon:{
        
    }
});

export default TrackDetailSCreen;