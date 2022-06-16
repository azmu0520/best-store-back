import styled from 'styled-components';

const Container = styled.div`
  max-width: 1400px;
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
  margin: 16px 0px 50px 0px;
  @media (max-width: 1150px) {
    font-size: 16px;
    line-height: 24px;
    margin: 9px 0px 20px 0px;
  }
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
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

const Card = styled.div`
  padding-bottom: 30px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

Card.Circle = styled.div`
  background: #eff2f7;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Card.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: #323a56;
  margin: 20px 0px 16px 0px;
  @media (max-width: 1150px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    margin: 10px 0px 8px 0px;
  }
`;

Card.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #8a90a5;
  width: 75%;
  @media (max-width: 1150px) {
    font-size: 16px;
    line-height: 26px;
    width: 85%;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    width: 90%;
  }
  @media (max-width: 420px) {
    width: 100%;
    font-size: 14px;
    line-height: 20px;
  }
`;

export { Container, Wrap, Card };
