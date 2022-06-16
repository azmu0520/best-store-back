import React from 'react';
import { Card, Flexing } from './style';
import Button from '../../Generic/Button';

const CardBlog = ({ value }) => {
  return (
    <Card>
      <Card.Img src={value?.image} alt='img' />
      <Card.Body>
        <Flexing>
          <Flexing.Div>
            <Flexing.User />
            <Flexing.Item>{value?.author}</Flexing.Item>
          </Flexing.Div>
          <Flexing.Div>
            <Flexing.Calendar />
            <Flexing.Item>{value?.date}</Flexing.Item>
          </Flexing.Div>
          <Flexing.Div>
            <Flexing.Comment />
            <Flexing.Item>12 ta comment</Flexing.Item>
          </Flexing.Div>
        </Flexing>
        <Card.Title>{value?.title}</Card.Title>
        <Card.Item>{value?.descr}</Card.Item>

        <Button width='127px' height={'44px'} margin='40px 0px 0px 0px'>
          Batafsil
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardBlog;
