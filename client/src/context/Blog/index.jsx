import React, { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BlogContext.Provider value={[state, dispatch]}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
