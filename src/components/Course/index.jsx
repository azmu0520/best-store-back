import React from 'react';
import GenericTeamCard from '../Generic/TeamCard';
import About from '../Home/About';
import Approach from './Approach';
import Courses from './Courses';
import Question from './Question';
import TeachingProcess from './TeachingProcess';

export const Course = () => {
  return (
    <>
      <Courses />
      <GenericTeamCard home={true} />
      <TeachingProcess />
      <Approach />
      <Question />
      <About />
    </>
  );
};

export default Course;
