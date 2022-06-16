import styled from 'styled-components';

// icons
import { ReactComponent as partner } from '../../../assets/icons/partner.svg';
import { ReactComponent as google } from '../../../assets/icons/google.svg';
import profile from '../../../assets/imgs/profile2.webp';

const Container = styled.div`
  background: #1d72d2;
  padding: 60px 0px 80px 0px;
  margin: 100px 0px;
  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 420px) {
    padding-left: 20px;
    padding-right: 30px;
  }
`;

const Wrap = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 1400px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media (max-width: 600px) {
    font-size: 26px;
    width: 100%;
    line-height: 34px;
  }
`;

Container.Text = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  width: 40%;
  margin: 16px 0px 50px 0px;
  @media (max-width: 1150px) {
    font-size: 16px;
    line-height: 24px;
    width: 70%;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
  }
`;

Container.SubTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin-bottom: 30px;
  margin-top: 55px;
`;

// Box
const Box = styled.div`
  width: 600px;
  padding: 25px 28px;
  background: #ffffff;
  box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.06);
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0px;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Div = styled.div`
  display: flex;
`;

Box.Logo = styled(partner)`
  margin-right: 16px;
`;

Box.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #323a56;
  margin-bottom: 6px;
`;

Box.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8a90a5;
`;

Box.Button = styled.div`
  width: 111px;
  height: 41px;
  background: #1d72d2;
  box-shadow: 0px 7px 12px rgba(32, 81, 137, 0.24);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
  @media (max-width: 600px) {
    margin-top: 15px;
    width: 100%;
  }
`;

// Flexing bottom
const Flexing = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 500px) {
    width: 100%;
    overflow-x: scroll;
  }
`;

const Circle = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.06);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    background: none;
  }
`;

Circle.Icons = styled(google)``;

Flexing.Profile = styled.img.attrs({
  src: profile,
})`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export { Box, Circle, Container, Div, Flexing, Wrap };
