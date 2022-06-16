import React from 'react';
import { projectData } from '../../../mock/project';
import Button from '../../Generic/Button';
import { Card, Container, Wrap } from './style';

const Project = () => {
  return (
    <Container>
      <Container.SubTitle>WebBrain Academy</Container.SubTitle>
      <Container.Header className='header'>
        Bizning <span className='span'>loyihalar</span>
      </Container.Header>
      <Container.Text className='text'>
        Beautiful and responsive React components to build your application or
        marketing pages quicker.
      </Container.Text>
      <Button margin='18px 0px 100px 0px'>
        Batafsil
        <Container.Arrow />
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
