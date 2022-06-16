import React from 'react'
import Button from '../../Generic/Button';
import { Container, Wrapper } from './style';

export const Subscribe = () => {
  return (
    <Container>
        <Wrapper>
            <Wrapper.Wrapper>
                <Wrapper.Eyes />
                <Wrapper.Item>
                    <Wrapper.Title>Biz bilan bog’lanish</Wrapper.Title>
                    <Wrapper.Description>Feel free to ask questions, reports, issues and meet new people</Wrapper.Description>
                </Wrapper.Item>
            </Wrapper.Wrapper>
            <Wrapper.Wrapper>
                <Button background={'#FFFFFF'} color='#323A56' margin='0 0 0 auto'>
                    <span>#Webbrain</span>ga qo‘shilish
                </Button>
            </Wrapper.Wrapper>
        </Wrapper>
    </Container>
  )
}

export default Subscribe;
