import styled from 'styled-components';

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 420px) {
    padding-left: 20px;
    padding-right: 30px;
  }
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
  margin: 16px 0px 60px 0px;
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

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 90px 40px;
  @media (max-width: 1400px) {
    margin-top: 60px;
  }
  @media (max-width: 900px) {
    margin-top: 40px;
    grid-template-columns: 500px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #eff2f7;
  border-radius: 10px;
  padding: 0px 40px 40px 40px;
  @media (max-width: 900px) {
    /* margin-top: 70px; */
    padding: 0px 20px 20px 20px;
  }
`;

Card.Circle = styled.div`
  width: 100px;
  height: 100px;
  background: #ffffff;
  border: 1px solid #eff2f7;
  box-shadow: 0px 25px 41px rgba(32, 81, 137, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: -50px;
  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

Card.Img = styled.img`
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

Card.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: #323a56;
  margin: 30px 0px 16px 0px;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

Card.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #8a90a5;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export { Container, Wrap, Card };
