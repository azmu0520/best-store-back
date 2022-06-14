import React from 'react';
import { Button, Container, Wrap } from './style';

export const About = () => {
  return (
    <Container>
      <Wrap>
        <Container.Header>
          Biz <span className='span'>kuchlilarni</span> tayyorlaymiz!
        </Container.Header>
        <Container.Text>
          Beautiful and responsive React components to build your application or
          marketing pages quicker.
        </Container.Text>
        <Button>
          Biz haqimizda <Button.Arrow />
        </Button>
      </Wrap>
      <Container.Sounds />
    </Container>
  );
};

export default About;
