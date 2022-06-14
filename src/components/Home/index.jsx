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
import Privileges from './Privileges';

const Home = () => {
  return (
    <Wrap>
      <Opener />
      <Less />
      <Advantage />
      <Privileges />
      <Result />
      <Team />
      <Partner />
      <Project />
      <About />
    </Wrap>
  );
};

export default Home;
