import React from 'react';
import { footerData } from '../../mock/footer';
import {
  Box,
  Circle,
  Container,
  Flexing,
  InputCon,
  TelegramCon,
} from './style';

const Footer = () => {
  return (
    <Container>
      <Box className='main'>
        <Box.Logo />
        <Box.Descr>Istiklal street, Tashkent, Uzbekistan, 200136</Box.Descr>
        <Flexing>
          <Circle className='circle'>
            <Flexing.Facebook className='icons' />
          </Circle>
          <Circle className='circle'>
            <Flexing.Instagram className='icons' />
          </Circle>
          <Circle className='circle'>
            <Flexing.Twitter className='icons' />
          </Circle>
          <Circle className='circle'>
            <Flexing.LinkedIn className='icons' />
          </Circle>
        </Flexing>
      </Box>

      {footerData.map(({ child, id, title }) => {
        return (
          <Box key={id}>
            <Box.Title>{title}</Box.Title>
            {child.map((value, index) => {
              return <Box.Item key={index}>{value}</Box.Item>;
            })}
          </Box>
        );
      })}

      <Box className='input'>
        <Box.Title className='none'>Subscribe</Box.Title>
        <Box.Descr className='none'>
          Subscribe to get the latest news from us
        </Box.Descr>

        {/* input */}
        <InputCon>
          <InputCon.Inputs type='text' placeholder='hello@gmail.com' />
          <TelegramCon>
            <TelegramCon.Icons />
          </TelegramCon>
        </InputCon>
      </Box>
    </Container>
  );
};

export default Footer;
