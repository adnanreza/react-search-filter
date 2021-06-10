import {
    FILTER_BLOGS,
    CLEAR_FILTER,
  } from './types';

  const blogReducer = (state, action) => {
      switch(action.type) {
          case FILTER_BLOGS:
              return {
                  ...state,
                  filtered: state.blogs.filter(blog => {
                      const regex = new RegExp(`${action.payload}`, 'ig');
                      return(
                          blog.title.match(regex) || blog.description.match(regex)
                      );
                  })
              }

          case CLEAR_FILTER:
              return {
                  ...state,
                  filtered: null
              }

          default:
              return state;
      }
  }

  export default blogReducer;