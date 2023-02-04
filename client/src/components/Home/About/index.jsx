import React from 'react';
import { Container, Wrap } from './style';
import Button from '../../Generic/Button';

const About = () => {
  return (
    <Container>
      <Wrap>
        <Container.Header className='header'>
          Biz <span className='span'>kuchlilarni</span> tayyorlaymiz!
        </Container.Header>
        <Container.Text className='text'>
          Beautiful and responsive React components to build your application or
          marketing pages quicker.
        </Container.Text>
        <Button width={'235px'} margin='16px 0px 100px 0px'>
          Biz haqimizda <Container.Arrow />
        </Button>
      </Wrap>
      <Container.Sounds />
    </Container>
  );
};

export default About;
