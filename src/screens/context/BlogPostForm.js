import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,Button} from 'react-native'

const BlogPostForm = ({onSubmit,initialValues}) =>{

    const [title,setTitle] = useState(initialValues.title)
    const [content,setContent] = useState(initialValues.content)
    return <View>
        <Text 
        style={styles.label}>Enter Title:</Text>
        <TextInput 
        style = {styles.input_title}
        value={title} 
        onChangeText={text =>setTitle(text)} />
        <Text 
        style={styles.label}>Enter Content:</Text>
        <TextInput 
        multiline
        onChangeText={text=>onChangeText(text)}
        style = {styles.input_content}
        value={content} onChangeText={text =>setContent(text)} />
        <Button 
        title ="Save Post "
        onPress={()=>onSubmit(title,content)}
        />
    </View>
}
BlogPostForm.defaultProps = {
    initialValues:{
        title:'',
        content:''
    }
}

const styles = StyleSheet.create({ input_title :{
    fontSize :18,
    borderWidth :1,
    borderColor:'black',

    marginBottom : 15,
    padding:5,
    margin:5
},
input_content :{
    fontSize :18,
    borderWidth :1,
    borderColor:'black',
    height:100,
    marginBottom : 15,
    padding:5,
    margin:5
},
label:{
    fontSize:20,
    marginBottom :10 ,
    marginLeft:5  
}})

export default BlogPostForm;