import React from 'react';
import About from '../Home/About';
import Team from '../Home/Team';
import Approach from './Approach';
import Question from './Question';
import TeachingProcess from './TeachingProcess';

export const Course = () => {
  return (
    <div>
      <Team />
      <TeachingProcess />
      <Approach />
      <Question />
      <About />
    </div>
  );
};

export default Course;
