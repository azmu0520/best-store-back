import React from 'react';
import Advantage from './Advantage';
import Less from './Less';
import Opener from './Opener';
import About from './About';
import Partner from './Partner';
import Project from './Project';
import Result from './Result';
import { Wrap } from './style';
import Team from './Team';
import Mentor from '../Generic/Mentor';
// import Future from './Future';

const Home = () => {
  return (
    <Wrap>
      <Opener />
      {/* <Mentor /> */}
      <Less />
      <Advantage />
      {/* <Future /> */}
      <Result />
      <Team />
      <Partner />
      <Project />
      <About />
    </Wrap>
  );
};

export default Home;
