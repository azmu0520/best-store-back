import React from 'react';
import { Container } from './style';

const TeachingProcess = () => {
  return (
    <Container>
      <Container.Header className='header'>
        O‘quv jarayonini <span className='span'>kuzatish</span>
      </Container.Header>
      <Container.Text className='text'>
        Webbrain akademiyasida juda qisqa muddatda istalgan dasturlash sohasida
        Junior darajasiga chiqa olasiz
      </Container.Text>
      <Container.Video
        width='100%'
        height='auto'
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
