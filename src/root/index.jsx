import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Courses from '../components/Generic/Courses';
import Mentor from '../components/Generic/Mentor';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import NotFound from '../components/NotFound';
import { data } from '../utilits/navbar';
const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path='/teams/:id' element={<Mentor />} />
        <Route path='/courses/:id' element={<Courses />} />
        {data?.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
        <Route path='/' element={<Home />} />
      </Route>
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};

export default Root;
