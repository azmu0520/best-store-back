import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  color: black;
`;

Container.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #8a90a5;
  margin: 16px 0px 60px 0px;
`;

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 90px 40px;
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #eff2f7;
  border-radius: 10px;
  padding: 0px 40px 40px 40px;
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
`;

Card.Img = styled.img``;

Card.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: #323a56;
  margin: 30px 0px 16px 0px;
`;

Card.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #8a90a5;
`;
