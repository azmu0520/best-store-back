import React, { useState } from 'react'
import Button from '../../Generic/Button';
import Input from '../../Generic/Input';
import { Container, Description, Title, Wrapper, Icons, Subtitle, Box, MapWrapper, MapMarker, } from './style';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export const Contact = () => {

    const [center, setCenter] = useState({
        lat: 41.311081,
        lng: 69.240562
    })

    const containerStyle = {
        width: '100%',
        height: '100%'
    };
    
    // const center = {
    //     lat: 41.311081,
    //     lng: 69.240562
    // };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4"
      })
    
    //   const [map, setMap] = React.useState(null)
    
    //   const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);
    //     setMap(map)
    //   }, [])
    
    //   const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    //   }, [])

    const onMapClick = (e) => {
        // console.log(e?.latLng?.lat(), 'lat');
        // console.log(e?.latLng?.lng(), 'lng');
        setCenter({
            lat: e?.latLng?.lat(),
            lng: e?.latLng?.lng()
        })
      }

  return (
    <>
    <Container>
        <Title>Biz bilan <span className='span'>bog‘lanish</span></Title>
        <Description>A collection of websites and projects built with Webbrain UI</Description>
        <Wrapper>
            <Wrapper.Card>
                <Icons>
                    <Icons.Tel />
                </Icons>
                <Icons.Wrap>
                    <Subtitle>Telefon raqamlar</Subtitle>
                    <Wrapper.Description>(99) 123 45 67</Wrapper.Description>
                    <Wrapper.Description>(95) 256 78 90</Wrapper.Description>
                </Icons.Wrap>
            </Wrapper.Card>
            <Wrapper.Card>
                <Icons>
                    <Icons.Email />
                </Icons>
                <Icons.Wrap>
                    <Subtitle>Email manzilimiz</Subtitle>
                    <Wrapper.Description>hello@gmail.com</Wrapper.Description>
                    <Wrapper.Description>helloteam@gmail.com</Wrapper.Description>
                </Icons.Wrap>
            </Wrapper.Card>
            <Wrapper.Card>
                <Icons>
                    <Icons.Address />
                </Icons>
                <Icons.Wrap>
                    <Subtitle>Joylashuvimiz</Subtitle>
                    <Wrapper.Description>Istiqlol ko’chasi 1a uy, </Wrapper.Description>
                    <Wrapper.Description>Toshkent, 231600</Wrapper.Description>
                </Icons.Wrap>
            </Wrapper.Card>
        </Wrapper>

        <Box>
            <Box.Form>
                <Box.Subtitle>Xabar yuborish</Box.Subtitle>
                <Input placeholder='Ismingiz' mt='30' />
                <Input placeholder='Familiyangiz' mt='30' />
                <Input placeholder='Telefoningiz' mt='30' />
                <Input placeholder='Emailingiz' mt='30' />
                <Box.Textarea placeholder='Xabaringizni yozing' />
                <Button width={'100%'} margin={'30px 0 0 0'}>Xabarni yuborish</Button>
            </Box.Form>
            <Box.Item>
                <Box.Title>Bepul maslahat olishni xohlaysizmi?</Box.Title>
                <Box.Desc>Sizni savollar qiynayotgan bo’lsa, hoziroq bizga qo’ng’iroq qiling!</Box.Desc>
                <Button margin={'30px 0 0 0'} background={'#F8FAFC'} color={'#1D72D2'}>Maslahat olish</Button>
            </Box.Item>
        </Box>
    </Container>
    <MapWrapper>
        {
            isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onClick={onMapClick}
                    // onLoad={onLoad}
                    // maxZoomStatus={20}
                    // onUnmount={onUnmount}
                >
                    <MapMarker label={'Biz bu yerdamiz'}  position={center} ></MapMarker>
                    <></>
                </GoogleMap>
            ) : <></>
        }
    </MapWrapper>
    {/* <Subscribe /> */}
    </>
  )
}

export default Contact;