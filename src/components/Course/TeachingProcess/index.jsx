import React from 'react';
import { Container } from './style';

export const TeachingProcess = () => {
  return (
    <Container>
      <Container.Header>
        O‘quv jarayonini <span className='span'>kuzatish</span>
      </Container.Header>
      <Container.Text>
        Webbrain akademiyasida juda qisqa muddatda istalgan dasturlash sohasida
        Junior darajasiga chiqa olasiz
      </Container.Text>
      <Container.Video
        src='https://www.youtube.com/embed/4z4Ice4DdAQ'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></Container.Video>
    </Container>
  );
};

export default TeachingProcess;
