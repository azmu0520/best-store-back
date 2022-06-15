import styled from 'styled-components';
import { ReactComponent as VsCode } from '../../../assets/icons/vs-code.svg';

export const Wrap = styled.div`
  background: #f8fafc;
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
  @media (max-width: 1000px) {
    font-size: 28px;
    padding-top: 80px;
    line-height: 34px;
  }
`;

Wrap.Descript = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  max-width: 450px;
  text-align: center;
  color: #8a90a5;
  margin: 0 auto;
  width: 100%;
  margin-top: 28px;
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
  }
`;

Wrap.Cards = styled.div`
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

Wrap.Card = styled.div`
  background: #ffffff;
  max-width: 100%;
  height: 270px;
  border: 1px solid #eff2f7;
  border-radius: 12px;
  padding: 40px;
  box-sizing: border-box;
  :hover {
    border-top: 5px solid #1d72d2;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.06);
  }
  transition: all 1 ease;
`;

Wrap.VsCode = styled(VsCode)`
  width: 70px;
  height: 70px;
  padding: 14px;
  border-radius: 50%;
  background: #eff2f7;
`;

Wrap.Icons = styled.div`
  display: flex;
  align-items: flex-start;
`;

Wrap.Top = styled.div`
  width: 53px;
  height: 23px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #70c63b;
  padding: 3px 12px;
  background: #e8f9de;
  border-radius: 32px;
  margin-left: auto;
`;

Wrap.CardTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #323a56;
  margin: 20px 0 35px 0;
`;

Wrap.Mentor = styled.div`
  display: flex;
  align-items: center;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8a90a5;
  }
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #1d72d2;
    margin-left: auto;
  }
`;
