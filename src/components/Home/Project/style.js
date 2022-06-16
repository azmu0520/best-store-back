import styled from 'styled-components';

// icons
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 420px) {
    padding-left: 20px;
    padding-right: 30px;
  }
`;

Container.SubTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #1d72d2;
`;

Container.Header = styled.div`
  margin: 18px 0px;
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
  width: 35%;
  @media (max-width: 1150px) {
    font-size: 16px;
    line-height: 24px;
    width: 50%;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
  }
`;

Container.Arrow = styled(Arrow)`
  path {
    fill: white;
  }
  margin-left: 14px;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0px;
  }
`;

const Card = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

export { Container, Wrap, Card };
