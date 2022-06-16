import styled from 'styled-components';

// icons
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) 2fr;
  padding: 50px 0px 72px 0px;
  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: repeat(2, 1fr);
    gap: 20px 10px;
    .main {
      grid-row: 2/4;
      grid-column: 1/2;
    }
    .input {
      grid-column: 2/4;
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: repeat(3, 1fr);
    gap: 20px 10px;
    .main {
      grid-row: 3/4;
      grid-column: 1/4;
    }
    .none {
      display: none;
    }
    .input {
      grid-column: 1/4;
    }
  }
  @media (max-width: 420px) {
    padding-left: 20px;
    padding-right: 30px;
  }
  @media (max-width: 320px) {
    gap: 30px 0px;
    grid-template-columns: repeat(1, 1fr);
    .main {
      grid-row: 5/6;
      grid-column: 1/1;
    }
    .input {
      grid-column: 1/1;
    }
  }
`;

const Box = styled.div``;

Box.Logo = styled(Logo)``;

Box.Descr = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  width: 50%;
  color: #8a90a5;
  margin: 17px 0px 28px 0px;
`;

const Flexing = styled.div`
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
`;

const Circle = styled.div`
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
Flexing.Instagram = styled(Instagram)`
  width: 16px;
  height: 16px;
`;
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
  margin: 15px 0px;
`;

const InputCon = styled.div`
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

const TelegramCon = styled.div`
  background: #1d72d2;
  border-radius: 8px;
  width: 70px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

TelegramCon.Icons = styled(Telegram)``;

export { Container, Circle, Box, Flexing, InputCon, TelegramCon };
