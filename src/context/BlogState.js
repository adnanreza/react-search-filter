import React, { useReducer } from 'react';
import BlogContext from './blogContext';
import blogReducer from './blogReducer';
import {
  FILTER_BLOGS,
  CLEAR_FILTER,
} from './types';

const BlogState = (props) => {
  
    const initialState = {
    blogs: [
      {
        id: 1,
        title: "Server Side Rendering for the win!",
        description: "NextJS is an awesome React framework"
      },
      {
        id: 2,
        title: "React - The future is bright!",
        description: "React is picking up steam!"
      },
      {
        id: 3,
        title: "NodeJS - Server-side JS",
        description: "Write JavaScript on the server"
      },
    ],
    filtered: null,
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Filter Blogs
  const filterBlogs = (text) => {
    dispatch({ type: FILTER_BLOGS, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        filtered: state.filtered,
        filterBlogs,
        clearFilter,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;