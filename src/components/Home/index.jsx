import React from 'react';
import About from './About';
import Partner from './Partner';
import Project from './Project';
import Result from './Result';
import { Wrap } from './style';
import Team from './Team';

const Home = () => {
  return (
    <Wrap>
      <Result />
      <Team />
      <Partner />
      <Project />
      <About />
    </Wrap>
  );
};

export default Home;
