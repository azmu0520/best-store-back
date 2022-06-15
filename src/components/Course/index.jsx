import React from 'react';
import GenericTeamCard from '../Generic/TeamCard';
import About from '../Home/About';
import Approach from './Approach';
import Courses from './Courses';
import Question from './Question';
import { Wrap } from './style';

export const Course = () => {
  return (
    <Wrap>
      <Courses />
      {/* <GenericTeamCard home={true} /> */}
      {/* <TeachingProcess /> */}
      {/* <Approach />
      <Question />
      <About /> */}
    </Wrap>
  );
};

export default Course;
