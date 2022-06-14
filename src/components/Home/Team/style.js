import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';

export const Container = styled.div`
  padding: 85px 0px 50px 0px;
  background: #f8fafc;
  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 420px) {
    padding-left: 20px;
    padding-right: 30px;
  }
`;

export const Wrap = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  color: #323a56;
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
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #8a90a5;
  margin: 16px 0px 40px 0px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    margin: 9px 0px 20px 0px;
  }
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

export const WrapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  width: 100%;
  margin-top: 50px;
  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0px;
  }
`;

export const Card = styled.div`
  padding-bottom: 30px;
  border: 1px solid #eff2f7;
  border-radius: 12px;
  transition: all 0.3s;
  :hover {
    border: 1px solid #eff2f7;
    box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.2);
  }
  @media (max-width: 600px) {
    margin: 10px 0px;
  }
`;

Card.Img = styled.img`
  width: 100%;
`;

Card.Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #323a56;
  margin: 30px 0px 6px 0px;
`;

Card.Job = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8a90a5;
`;
