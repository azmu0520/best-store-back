import React from 'react';
import { projectData } from '../../../mock/project';
import { Button, Card, Container, Wrap } from './style';

export const Project = () => {
  return (
    <Container>
      <Container.SubTitle>WebBrain Academy</Container.SubTitle>
      <Container.Header>
        Bizning <span className='span'>loyihalar</span>
      </Container.Header>
      <Container.Text>
        Beautiful and responsive React components to build your application or
        marketing pages quicker.
      </Container.Text>
      <Button>
        Batafsil
        <Button.Arrow />
      </Button>
      <Wrap>
        {projectData.map((value) => {
          return <Card key={value.id} src={value.url} alt={value.title} />;
        })}
      </Wrap>
    </Container>
  );
};

export default Project;
