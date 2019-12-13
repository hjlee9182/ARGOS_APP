import React, { useContext } from 'react';
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../context/BlogPostForm'
const createfree = ({navigation}) =>{
    
    const {addfreePost} = useContext(Context);
    return <BlogPostForm
        onSubmit={(title,content)=>{
            addfreePost(title,content,()=>navigation.pop())

        }
        }/>;
    
}

const styles = StyleSheet.create({
   
})

export default createfree;