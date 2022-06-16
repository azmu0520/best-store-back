import React from 'react';
import { teamData } from '../../../mock/team';
import { Card, Container, Wrap, WrapGrid } from './style';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const GenericTeamCard = ({ hide, home }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrap>
        <Container.Header className='header'>
          Bizning professional <span className='span'>jamoamiz</span>
        </Container.Header>
        <Container.Text className='text'>
          A collection of websites and projects built with Webbrain UI
        </Container.Text>
        <Button onClick={() => navigate('/team')} hide={hide} width={'241px'}>
          Ko‘proq ko‘rish
          <Wrap.Arrow />
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
