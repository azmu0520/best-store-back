import React from 'react';
import { approachData } from '../../../mock/approach';
import { Card, Container, Wrap } from './style';

export const Approach = () => {
  return (
    <Container>
      <Container.Header>
        Ta’limga <span className='span'>tizimli</span> yondashuv
      </Container.Header>
      <Container.Text>
        Quyida bizning ustun jihatlarimiz bilan tanishing
      </Container.Text>

      {/* Grid */}
      <Wrap>
        {approachData.map(({ id, Icons, title, text }) => {
          return (
            <Card key={id}>
              <Card.Circle>
                <Icons />
              </Card.Circle>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
            </Card>
          );
        })}
      </Wrap>
    </Container>
  );
};

export default Approach;
