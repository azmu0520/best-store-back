import React from 'react';
import Modal from './Model';
import Opener from './Opener';
import { Wrap } from './style';
import Whom from './Whom';

const Courses = () => {
  return (
    <Wrap>
      <Opener />
      <Whom />
      <Modal />
    </Wrap>
  );
};

export default Courses;
