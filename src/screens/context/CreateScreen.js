import React,{useContext, useState} from 'react';
import {StyleSheet,} from 'react-native'
import {Context} from '../context/BlogContext'
import BlogPostForm from '../context/BlogPostForm'
const CreateScreen = ({navigation}) =>{
    
    const {addBlogPost} = useContext(Context);
    return <BlogPostForm
        onSubmit={(title,content)=>{
            addBlogPost(title,content,()=>navigation.pop())

        }
        }/>;
    
}

const styles = StyleSheet.create({
   
})

export default CreateScreen;