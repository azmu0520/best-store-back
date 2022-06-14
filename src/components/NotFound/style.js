import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import img from '../../assets/imgs/404.png';

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Img = styled.img.attrs({
  src: img,
})``;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  color: #323a56;
`;

Container.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #8a90a5;
  margin: 16px 0px 40px 0px;
`;

export const Button = styled.div`
  width: 241px;
  height: 64px;
  background: #1d72d2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

Button.Arrow = styled(Arrow)`
  path {
    fill: white;
  }
  margin-left: 14px;
`;
