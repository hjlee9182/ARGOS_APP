import React, { useContext ,useEffect} from 'react';
import {View,StyleSheet,Text,FlatList,Button} from 'react-native';
import {Context} from '../context/createDataContext'
import {Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const freeboard = ({navigation}) =>{
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
            <View style={styles.row,{ 
             flexDirection : 'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'gray'   ,flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <TouchableOpacity style={{width:300 }} onPress={(  )=> { 
            navigation.navigate('Show',{id:item.id,navigationOptions:{title:item.title}}); }}>
                <View >
                <Text style={styles.title}>#{item.id}  {item.title}</Text>
                
                </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{
                    if(!this.preventDefault){
                    deleteBlogPost(item.id)}}}>
                <Feather size={30} name = "trash"/>
                </TouchableOpacity>
            </View>
            )
            
        // return (
        // <TouchableOpacity onLongPress={(  )=> { 
        // navigation.navigate('Show',{id:item.id}); }}>
        //     <View style={styles.row}>
        //     <Text style={styles.title}>{item.title}-{item.id}</Text>
        //     <TouchableOpacity onPress={()=>{
        //         if(!this.preventDefault){
        //         deleteBlogPost(item.id)}}}>
        //     <Feather size={30} name = "trash"/>
        //     </TouchableOpacity>
        //     </View>
        // </TouchableOpacity>
        // )
    }}
    />
    </View>)
    };

    freeboard.navigationOptions = ({navigation}) =>{
    return {

        headerRight: 
        (<TouchableOpacity onPress={()=>navigation.navigate('Create')}>
        <Feather name="plus" size={30}/>
        </TouchableOpacity>),
        title: "자유게시판"
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

export default freeboard;