import styled from 'styled-components';
import { ReactComponent as Moon } from '../../../assets/icons/moon.svg';
export const Wrap = styled.div`
  background: #f8fafc;
  /* height: 90vh; */
  width: 100%;
`;
Wrap.Wrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

Wrap.Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  text-align: center;
  color: #323a56;

  padding-top: 100px;
  @media (max-width: 1000px) {
    font-size: 28px;
    padding-top: 80px;
    line-height: 34px;
  }
  span {
    color: #1d72d2;
  }
`;

Wrap.Descript = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #8a90a5;
  margin-top: 28px;
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
  }
`;

Wrap.Moon = styled(Moon)`
  width: 50px;
  box-sizing: border-box;
  padding: 14px;
  background: #eff2f7;
  border-radius: 50%;
  height: 50px;
`;
Wrap.SubTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  color: #8a90a5;
`;

Wrap.CardText = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #323a56;
  margin: 20px 0 8px 0;
`;

Wrap.Card = styled.div`
  background: #ffffff;
  max-width: fit-content;
  height: 270px;
  border: 1px solid #eff2f7;
  border-radius: 12px;
  padding: 40px;
  box-sizing: border-box;
`;

Wrap.CardWrap = styled.div`
  display: grid;
  max-width: 1400px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-top: 50px;
  padding-bottom: 70px;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
    max-width: 900px;
    grid-gap: 20px;
  }
  @media (max-width: 940px) {
    max-width: 500px;
    grid-template-columns: 1fr;
  }
  @media (max-width: 570px) {
    margin: 40px 20px;
  }
`;
