import React from 'react'
import {Text} from 'react-native';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) =>{
    return <BlogContext.Provider value={5}>
        {children}
        <Text>hi</Text>
    </BlogContext.Provider>
}

export default BlogContext;