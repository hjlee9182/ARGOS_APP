import React, { useContext } from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';
import BlogContext,{BlogProvider} from './context/BlogContext'

const TrackDetailSCreen = () =>{
    const value = useContext(BlogContext);
    
    return (<View>
    
    <Button 
    onPress = {()=>console.log(value)}
    title="gd"
    />
    <BlogProvider> 
    <Text>{value}</Text>
    <Text style = {{fontSize:48}}>TrackDetailSCreen</Text>
    </BlogProvider></View>)
    };

const styles = StyleSheet.create({});

export default TrackDetailSCreen;