import React from 'react';
import { Button, Card, Container, Wrap, WrapGrid } from './style';
import { teamData } from '../../../mock/team.js';
export const Team = () => {
  return (
    <Container>
      <Wrap>
        <Container.Header>
          Bizning professional <span className='span'>jamoamiz</span>
        </Container.Header>
        <Container.Text>
          A collection of websites and projects built with Webbrain UI
        </Container.Text>
        <Button>
          Ko‘proq ko‘rish
          <Button.Arrow />
        </Button>

        <WrapGrid>
          {teamData.map((value) => {
            return (
              <Card key={value.id}>
                <Card.Img src={value.url} alt={value.name} />
                <Card.Name>{value.fullname}</Card.Name>
                <Card.Job>{value.job}</Card.Job>
              </Card>
            );
          })}
        </WrapGrid>
      </Wrap>
    </Container>
  );
};

export default Team;
