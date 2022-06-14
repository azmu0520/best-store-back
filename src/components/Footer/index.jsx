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

export const Footer = () => {
  return (
    <Container>
      <Box>
        <Box.Logo />
        <Box.Descr>Istiklal street, Tashkent, Uzbekistan, 200136</Box.Descr>
        <Flexing>
          <Circle className='circle'>
            <Flexing.Facebook className='icons' />
          </Circle>
          <Circle className='circle'>
            <Flexing.Instagram className='icons-ins' />
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

      <Box>
        <Box.Title>Subscribe</Box.Title>
        <Box.Descr>Subscribe to get the latest news from us</Box.Descr>

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
