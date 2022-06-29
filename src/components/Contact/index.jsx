import emailjs from 'emailjs-com'
import React, { useRef } from 'react';
import Button from '../Generic/Button';
import Input from '../Generic/Input';
import {
  Container,
  Description,
  Title,
  Wrapper,
  Icons,
  Subtitle,
  Box,
  MapWrapper,
  Label,
  InfoWindowW,
} from './style';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export const Contact = () => {  

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
      lat: 41.27672898036958,
      lng: 69.22216598386504
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4',
  });

  //   const [map, setMap] = React.useState(null)

  //   const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds(center);
  //     map.fitBounds(bounds);
  //     setMap(map)
  //   }, [])

  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null)
  //   }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vfmgarv',
        'template_0pgr4wj',
        form.current,
        'user_pywPsnKY1q8czlk9MyD56'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <>
      <Container>
        <Title>
          Biz bilan <span className='span'>bog‘lanish</span>
        </Title>
        <Description>
          A collection of websites and projects built with Webbrain UI
        </Description>
        <Wrapper>
          <Wrapper.Card>
            <Icons>
              <Icons.Tel />
            </Icons>
            <Icons.Wrap>
              <Subtitle>Telefon raqamlar</Subtitle>
              <a href="tel: +998 99 123 45 67">
                <Wrapper.Description>(99) 123 45 67</Wrapper.Description>
              </a>
              <a href="tel: +998 95 256 78 90">
                <Wrapper.Description>(95) 256 78 90</Wrapper.Description>
              </a>
              
            </Icons.Wrap>
          </Wrapper.Card>
          <Wrapper.Card>
            <Icons>
              <Icons.Email />
            </Icons>
            <Icons.Wrap>
              <Subtitle>Email manzilimiz</Subtitle>
              <a href="mailto:hello@gmail.com">
                <Wrapper.Description>hello@gmail.com</Wrapper.Description>
              </a>
              <a href="mailto:helloteam@gmail.com">
                <Wrapper.Description>helloteam@gmail.com</Wrapper.Description>
              </a>
              
            </Icons.Wrap>
          </Wrapper.Card>
          <Wrapper.Card>
            <Icons>
              <Icons.Address />
            </Icons>
            <Icons.Wrap>
              <Subtitle>Joylashuvimiz</Subtitle>
              <Wrapper.Description>
                Istiqlol ko’chasi 1a uy,{' '}
              </Wrapper.Description>
              <Wrapper.Description>Toshkent, 231600</Wrapper.Description>
            </Icons.Wrap>
          </Wrapper.Card>
        </Wrapper>

        <Box>
          <Box.Form ref={form} onSubmit={sendEmail}>
            <Box.Subtitle>Xabar yuborish</Box.Subtitle>
            <Input type='text' name='names' mt='30' />
            <Input name='surname' placeholder='Familiyangiz' mt='30' />
            <Input name='tel' placeholder='Telefoningiz' mt='30' />
            <Input name='email' placeholder='Emailingiz' mt='30' />
            <Box.Textarea name='description' placeholder='Xabaringizni yozing' />
            <Button width={'100%'} margin={'30px 0 0 0'}>
              Xabarni yuborish
            </Button>
          </Box.Form>
          <Box.Item>
            <Box.Title>Bepul maslahat olishni xohlaysizmi?</Box.Title>
            <Box.Desc>
              Sizni savollar qiynayotgan bo’lsa, hoziroq bizga qo’ng’iroq
              qiling!
            </Box.Desc>
            <input type="submit" />
            {/* <Button
              margin={'30px 0 0 0'}
              background={'#F8FAFC'}
              color={'#1D72D2'}
              onClick={sendEmail}
            >
              Maslahat olish
            </Button> */}
          </Box.Item>
        </Box>
      </Container>
      <MapWrapper>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            // onLoad={onLoad}
            // maxZoomStatus={20}
            // onUnmount={onUnmount}
          >
            <Marker  position={center}></Marker>
            <InfoWindowW position={{
                    lat: 41.27672898036958+0.00002,
                    lng: 69.22216598386504
                }}>
              <Label>
                <Label.Title >Biz bu yerdamiz!</Label.Title>
                <Label.Description>Sizni kutib olishdan mamnunmiz! Manzilimiz: Istiqlol ko‘chasi 1a uy, Yunusobod tumani, Toshkent sh.</Label.Description>
              </Label>
            </InfoWindowW>
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </MapWrapper>
      {/* <Subscribe /> */}
    </>
  );
};

export default Contact;
