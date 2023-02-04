import styled from 'styled-components';
import { ReactComponent as Play } from '../../../../assets/icons/play.svg';
import { ReactComponent as Thub } from '../../../../assets/icons/thum.svg';
import img from '../../../../assets/imgs/less.png';
export const Wrap = styled.div``;
Wrap.Wrap = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 100px auto 0 auto;
  padding-bottom: 70px;
  @media (max-width: 800px) {
    padding-bottom: 40px;
  }
`;

Wrap.Title = styled.div``;

Wrap.Desc = styled.div`
  max-width: 630px;

  margin: 16px auto 50px auto;
`;

Wrap.Body = styled.div`
  display: flex;
  column-gap: 30px;
  height: 630px;
  width: fit-content;
  padding-bottom: 120px;
  margin: 0 auto;
  padding: 0 20px 120px 20px;
  @media (max-width: 1400px) {
    flex-direction: column;
    height: fit-content;
  }
`;

Wrap.Img = styled.div`
  flex: 4;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
      0deg,
      rgba(32, 81, 137, 0.25),
      rgba(32, 81, 137, 0.25)
    ),
    url(${img});
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1400px) {
    min-height: 335px;
  }
`;

Wrap.PalyWrap = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
`;
Wrap.Play = styled(Play)`
  width: 38px;
  height: 35px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
  margin: 0 auto;
  flex: 5;
`;

Card.Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 191px;
  width: fit-content;
  background: #f8fafc;
  border: 1px solid #eff2f7;
  border-radius: 6px;
  padding: 30px;
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: flex-start;
    height: 246px;
  }
`;

Card.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  margin-bottom: 16px;
  color: #323a56;
`;

Card.Desc = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #8a90a5;
`;

Card.Icon = styled.img`
  width: 44px;
  height: 44px;
`;

Card.Text = styled.div`
  display: flex;
  flex-direction: column;
`;

Card.IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 25px 41px rgba(32, 81, 137, 0.06);
  min-width: 90px;
  min-height: 90px;
  padding: 10px;
  border-radius: 50%;
  margin-right: 30px;
`;

export const Ad = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px 60px;
  margin-bottom: 120px;
  padding: 0 40px;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1125px) {
    grid-template-columns: 1fr;
  }
`;

Ad.Card = styled.div`
  display: flex;
  align-items: flex-start;
`;

Ad.Text = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #8a90a5;
  margin-left: 17px;
`;

Ad.Icon = styled(Thub)`
  width: 45px;
  height: 32px;
`;
