import React from 'react';
import Advantage from './Advantage';
import Less from './Less';
import Opener from './Opener';
import { Wrap } from './style';

const Home = () => {
  return (
    <Wrap>
      <Opener />
      <Less />
      <Advantage />
    </Wrap>
  );
};

export default Home;
