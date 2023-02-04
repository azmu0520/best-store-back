import styled from 'styled-components';

// icons
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { ReactComponent as Sound } from '../../../assets/icons/sound.svg';

const Container = styled.div`
  background: #f8fafc;
  padding-top: 60px;
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
  @media (max-width: 1400px) {
    font-size: 40px;
    width: 50%;
    line-height: 48px;
  }
  @media (max-width: 900px) {
    font-size: 34px;
    width: 70%;
    line-height: 40px;
  }
  @media (max-width: 600px) {
    font-size: 26px;
    width: 100%;
    line-height: 34px;
  }
`;

Container.Text = styled.div`
  width: 35%;
  margin: 18px 0px;
  @media (max-width: 1150px) {
    width: 80%;
    font-size: 16px;
    line-height: 24px;
    margin: 9px 0px 20px 0px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

Container.Arrow = styled(Arrow)`
  path {
    fill: white;
  }
  margin-left: 14px;
`;

Container.Sounds = styled(Sound)`
  margin-top: 80px;
  width: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`;

export { Container, Wrap };
