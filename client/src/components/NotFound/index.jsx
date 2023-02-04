import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Wrap } from './style';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Container>
        <Container.Img />
        <Container.Header>
          Uzr, <span>xatolik</span> ro‘y berdi!
        </Container.Header>
        <Container.Text>
          Asosiy menuga qaytish uchun tugmani bosing.
        </Container.Text>
        <Button onClick={() => navigate(-1)}>
          Asosiy menu
          <Button.Arrow />
        </Button>
      </Container>
    </Wrap>
  );
};

export default NotFound;
