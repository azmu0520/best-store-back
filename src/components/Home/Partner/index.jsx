import React from 'react';
import { Box, Circle, Container, Div, Flexing, Wrap } from './style';

export const Partner = () => {
  return (
    <Container>
      <Wrap>
        <Container.Header>Hamkorlik qilishga tayyormisiz?</Container.Header>
        <Container.Text>
          Our maintainers devote their time, effort, and heart to ensure
          Webbrain UI keeps getting better. Support us by donating to our
          collective
        </Container.Text>

        {/* Box */}
        <Box>
          <Div>
            <Box.Logo />
            <div>
              <Box.Title>Open Collective</Box.Title>
              <Box.Text>Sponsor the Webbrain UI maintainers</Box.Text>
            </div>
          </Div>
          <Box.Button>Sponsor</Box.Button>
        </Box>

        <Box>
          <Div>
            <Box.Logo />
            <div>
              <Box.Title>Open Collective</Box.Title>
              <Box.Text>Sponsor the Webbrain UI maintainers</Box.Text>
            </div>
          </Div>
          <Box.Button>Sponsor</Box.Button>
        </Box>

        {/* Flexing */}
        <Container.SubTitle>ORGANIZATION SPONSORS</Container.SubTitle>

        <Flexing>
          <Circle>
            <Circle.Icons />
          </Circle>
          <Circle>
            <Circle.Icons />
          </Circle>
          <Circle>
            <Circle.Icons />
          </Circle>
          <Circle>
            <Circle.Icons />
          </Circle>
          <Circle>
            <Circle.Icons />
          </Circle>
        </Flexing>
        <Container.SubTitle>INDIVIDUAL SPONSORS</Container.SubTitle>
        <Flexing>
          <Flexing.Profile />
          <Flexing.Profile />
          <Flexing.Profile />
          <Flexing.Profile />
          <Flexing.Profile />
        </Flexing>
      </Wrap>
    </Container>
  );
};

export default Partner;
