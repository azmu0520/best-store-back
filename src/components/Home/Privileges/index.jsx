import React from 'react';
import { privilegesData } from '../../../mock/privileges';
import { Container, Wrap, Card } from './style';

export const Privileges = () => {
  return (
    <Container>
      <Container.Header>
        <span className='span'>Imtiyozlar</span> kimlarga beriladi?
      </Container.Header>
      <Container.Text>
        A collection of websites and projects built with Webbrain UI
      </Container.Text>

      <Wrap>
        {privilegesData.map((value) => {
          return (
            <Card key={value.id}>
              <Card.Circle>
                <Card.Img src={value.url} alt={value.title} />
              </Card.Circle>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>{value.descr}</Card.Text>
            </Card>
          );
        })}
      </Wrap>
    </Container>
  );
};

export default Privileges;
