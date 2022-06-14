import styled from 'styled-components';
import { ReactComponent as Moon } from '../../../assets/icons/moon.svg';
export const Wrap = styled.div`
  background: #f8fafc;
  /* height: 90vh; */
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
  width: 400px;
  height: 270px;
  border: 1px solid #eff2f7;
  border-radius: 12px;
  padding: 40px;
  box-sizing: border-box;
`;

Wrap.CardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 40px;
  margin-top: 50px;
  padding-bottom: 70px;
`;
