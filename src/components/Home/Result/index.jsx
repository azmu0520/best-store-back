import React from 'react';
import { resultData } from '../../../mock/result';
import { Box, Container, Flexing, Wrap, WrapCon } from './style';

export const Result = () => {
  return (
    <Container>
      <WrapCon>
        <Container.Header>Shiddat bilan o‘sayotgan Webbrain</Container.Header>
        <Container.Text>
          We’re dedicated to improving the experience and perfomance of Webbrain
          UI
        </Container.Text>

        <Wrap>
          {resultData.map(({ id, Icons, count, text }) => {
            return (
              <Box key={id}>
                <Box.Count>{count}</Box.Count>
                <Flexing>
                  <Icons className='icons' />
                  <Flexing.Text>{text}</Flexing.Text>
                </Flexing>
              </Box>
            );
          })}
        </Wrap>
      </WrapCon>
    </Container>
  );
};

export default Result;
