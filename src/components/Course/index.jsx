import React from 'react';
import About from '../Home/About';
import Team from '../Home/Team';
import Approach from './Approach';
import Courses from './Courses';
import Question from './Question';
import TeachingProcess from './TeachingProcess';

export const Course = () => {
  return (
    <div>
      <Courses />
      <TeachingProcess />
      <Team />
      <Approach />
      <Question />
      <About />
    </div>
  );
};

export default Course;
