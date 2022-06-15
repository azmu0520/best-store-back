import React from 'react';
import { teamData } from '../../../mock/team';
import { Button, Card, Container, Wrap, WrapGrid } from './style';

export const GenericTeamCard = ({ hide, home }) => {
  return (
    <Container>
      <Wrap>
        <Container.Header>
          Bizning professional <span className='span'>jamoamiz</span>
        </Container.Header>
        <Container.Text>
          A collection of websites and projects built with Webbrain UI
        </Container.Text>
        <Button hide={hide}>
          Ko‘proq ko‘rish
          <Button.Arrow />
        </Button>

        <WrapGrid>
          {teamData
            .filter((e) => (home ? e.isHome : true))
            .map((value) => {
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

export default GenericTeamCard;
