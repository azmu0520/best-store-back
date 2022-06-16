import styled from 'styled-components';
import {ReactComponent as tel} from '../../../assets/icons/call.svg'
import {ReactComponent as email} from '../../../assets/icons/email.svg'
import {ReactComponent as address} from '../../../assets/icons/address.svg'
import img from '../../../assets/imgs/contact.png'
import { Marker } from '@react-google-maps/api';


const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  display: grid;
  padding-top: 110px;
  @media (max-width: 1500px) {
    padding: 100px 40px 0 40px;
  }
  @media (max-width: 1200px) {
    padding: 80px 20px 0 20px;
  }
`;


const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 65px;
    text-align: center;
    color: #323A56;
    @media (max-width: 1300px) {
        font-size: 53px;
    }
    @media (max-width: 1200px) {
        font-size: 28px;
        line-height: 34px;
    }
`

const Subtitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #323A56;
    margin-bottom: 16px;
    @media (max-width: 1300px) {
        font-size: 22px;
    }
    @media (max-width: 1200px) {
        font-size: 21px;
    }
`

const Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: #8A90A5;
    margin-top: 16px;
    margin-bottom: 59px;
    
    @media (max-width: 1300px) {
        font-size: 16px;
        line-height: 27px;
    }
    @media (max-width: 1200px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 40px;
    }
`

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin-bottom: 59px;
    @media (max-width: 1300px) {
        grid-gap: 35px;
    }
    @media (max-width: 1200px) {
        grid-gap: 30px;
        grid-template-columns: repeat(1, 1fr);
        margin-bottom: 30px;
    }

`

Wrapper.Card = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #FFFFFF;
    border: 1px solid #EFF2F7;
    border-radius: 6px;
    box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.06);
    @media (max-width: 1300px) {
        padding: 30px 20px;
    }
    @media (max-width: 1200px) {
        padding: 25px 15px;
        max-width: 450px;
        width: 100%;
        margin: auto;
        justify-content: center;
        gap: 20px;
    }
`

const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background: #FFFFFF;
    border: 1px solid #EFF2F7;
    box-shadow: 0px 25px 41px rgba(32, 81, 137, 0.06);
    border-radius: 50%;
    @media (max-width: 1300px) {
        width: 80px;
        height: 80px;
    }
    @media (max-width: 1200px) {
        width: 70px;
        height: 70px;
    }
`

Icons.Tel = styled(tel)`
    @media (max-width: 1300px) {
        width: 30px;
        height: 30px;
    }
    @media (max-width: 1200px) {
        width: 28px;
        height: 28px;
    }
`
Icons.Email = styled(email)`
    @media (max-width: 1300px) {
        width: 30px;
        height: 30px;
    }
    @media (max-width: 1200px) {
        width: 28px;
        height: 28px;
    }
`
Icons.Address = styled(address)`
    @media (max-width: 1300px) {
        width: 30px;
        height: 30px;
    }
    @media (max-width: 1200px) {
        width: 28px;
        height: 28px;
    }
`

Icons.Wrap = styled.div`
    /* background-color: red; */
    width: 200px;
`

Wrapper.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    /* text-align: center; */
    color: #8A90A5;
`

const Box = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 150px;
    @media (max-width: 1300px) {
        /* flex-direction: column; */
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        margin-bottom: 60px;
    }
`

Box.Form = styled.div`
    background: #FFFFFF;
    border: 1px solid #EFF2F7;
    box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.06);
    border-radius: 8px 0px 0px 8px;
    width: 100%;
    padding: 50px;
    border-radius: 8px 0px 0px 8px;
    @media (max-width: 1300px) {
        /* padding: 80px 30px; */
    }
    @media (max-width: 1200px) {
        border-radius: 8px;
        padding: 30px;
    }
`

Box.Subtitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
    color: #323A56;
`

Box.Textarea = styled.textarea`
    width: 100%;
    height: 150px;
    background: #F8FAFC;
    border: 1px solid #EFF2F7;
    color: #8894A0;
    margin-top: 30px;
    resize: none;
    border-radius: 6px;
    padding-left: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
    outline: none;
`

Box.Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: linear-gradient(0deg, rgba(32, 81, 137, 0.3), rgba(32, 81, 137, 0.8)), url(${img});
    height: 100%;
    border-radius: 0px 8px 8px 0px;
    box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.06);
    @media (max-width: 1300px) {
        /* padding: 80px 30px; */
    }
    @media (max-width: 1200px) {
        padding: 80px 30px;
        margin-top: 30px;
        border-radius: 8px;
    }
`

Box.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 51px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 18px;
    max-width: 413px;
    @media (max-width: 1300px) {
        font-size: 40px;
    }
    @media (max-width: 1200px) {
        font-size: 28px;
        line-height: 34px;
    }
`

Box.Desc = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    max-width: 394px;
    @media (max-width: 1300px) {
        font-size: 18px;
    }
    @media (max-width: 1200px) {
        font-size: 16px;
        line-height: 24px;
    }
`

const MapWrapper = styled.div`
    width: 100%;
    height: 600px;
    @media (max-width: 1200px) {
        height: 420px;
    }

`

const MapMarker = styled(Marker)`
    position: relative;
`

export { Container, Title, Description, Wrapper, Icons, MapWrapper, Subtitle, Box, MapMarker }