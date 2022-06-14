import styled from 'styled-components';
// icons
import { ReactComponent as telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) 2fr;
  padding: 50px 0px 72px 0px;
`;

export const Box = styled.div``;

Box.Logo = styled(logo)``;

Box.Descr = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  width: 50%;
  color: #8a90a5;
  margin: 17px 0px 28px 0px;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  .circle:hover {
    box-shadow: 0px 7px 12px rgba(32, 81, 137, 0.24);
    background: #1d72d2;
  }

  .circle:hover .icons {
    path {
      fill: white;
    }
  }
  .circle:hover .icons-ins {
    path {
      stroke: white;
    }
  }
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  transform: scale(1);
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
`;

Flexing.Facebook = styled(Facebook)``;
Flexing.Instagram = styled(Instagram)``;
Flexing.Twitter = styled(Twitter)``;
Flexing.LinkedIn = styled(LinkedIn)``;

Box.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #323a56;
  margin-bottom: 15px;
`;

Box.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8a90a5;
  /* display: inline-block; */
  margin: 15px 0px;
`;

export const InputCon = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #eff2f7;
  border-radius: 8px;
  padding: 5px;
  filter: drop-shadow(0px 10px 16px rgba(32, 81, 137, 0.06));
`;

InputCon.Inputs = styled.input`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #8a90a5;
  padding-left: 20px;
  width: 80%;
  height: 52px;
  border: none;
  outline: none;
`;

export const TelegramCon = styled.div`
  background: #1d72d2;
  border-radius: 8px;
  width: 70px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

TelegramCon.Icons = styled(telegram)``;
