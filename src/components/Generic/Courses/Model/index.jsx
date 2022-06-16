import React from 'react';
import { Card, Container, Wrap } from './style';
import img from '../../../../assets/imgs/learn.png';

const Modal = () => {
  let data = [
    {
      id: 0,
      url: img,

      title: '4 ta modul, 41 ta dars',
      descr:
        'Fronted dasturlash kursi orqali siz ko’plab dasturlash texnologiyalari ya’ni HTML, CSS, JavaScript, Bootstrap, Sass singari texnologiyalarni mukammal o’rganishingiz mumkin.',
    },
    {
      id: 1,
      url: img,
      title: '4 ta modul, 41 ta dars',
      descr:
        'Fronted dasturlash kursi orqali siz ko’plab dasturlash texnologiyalari ya’ni HTML, CSS, JavaScript, Bootstrap, Sass singari texnologiyalarni mukammal o’rganishingiz mumkin.',
    },
    {
      id: 2,
      url: img,
      title: '4 ta modul, 41 ta dars',
      descr:
        'Fronted dasturlash kursi orqali siz ko’plab dasturlash texnologiyalari ya’ni HTML, CSS, JavaScript, Bootstrap, Sass singari texnologiyalarni mukammal o’rganishingiz mumkin.',
    },
    {
      id: 3,
      url: img,
      title: '4 ta modul, 41 ta dars',
      descr:
        'Fronted dasturlash kursi orqali siz ko’plab dasturlash texnologiyalari ya’ni HTML, CSS, JavaScript, Bootstrap, Sass singari texnologiyalarni mukammal o’rganishingiz mumkin.',
    },
  ];
  return (
    <Container>
      <Container.Header className='header'>
        <span className='span'>Imtiyozlar</span> kimlarga beriladi?
      </Container.Header>
      <Container.Text className='text'>
        A collection of websites and projects built with Webbrain UI
      </Container.Text>

      <Wrap>
        {data.map((value) => {
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

export default Modal;
