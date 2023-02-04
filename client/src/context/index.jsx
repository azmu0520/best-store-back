import React from 'react';
import BlogProvider from './Blog';

const MainContext = ({ children }) => {
  return <BlogProvider>{children}</BlogProvider>;
};

export default MainContext;
