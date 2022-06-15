import React from 'react';
import GenericTeamCard from '../Generic/TeamCard';
import About from '../Home/About';
import Approach from './Approach';
import Courses from './Courses';
import Question from './Question';

export const Course = () => {
  return (
    <>
      <GenericTeamCard home={true} />
      <Courses />
      {/* <TeachingProcess /> */}
      <Approach />
      <Question />
      <About />
    </>
  );
};

export default Course;
