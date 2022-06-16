import styled from 'styled-components';

const Container = styled.div`
  background: #1d72d2;
  padding: 60px 0px;
  @media (max-width: 1400px) {
    padding: 60px 40px;
  }
  @media (max-width: 600px) {
    .icons {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 420px) {
    padding: 60px 20px;
  }
`;

const WrapCon = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  color: #ffffff;
  width: 50%;
  @media (max-width: 1400px) {
    font-size: 40px;
    width: 50%;
    line-height: 48px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
    width: 100%;
    line-height: 34px;
  }
`;

Container.Text = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin: 16px 0px 50px 0px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, auto);
    gap: 40px;
    width: fit-content;
  }
`;

const Box = styled.div`
  border-left: 2px solid #ecc744;
  padding-left: 30px;
  @media (max-width: 600px) {
    padding-left: 60px;
  }
`;

Box.Count = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  line-height: 97px;
  color: #ffffff;
  @media (max-width: 600px) {
    font-size: 60px;
    line-height: 73px;
  }
`;

const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

Flexing.Text = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-left: 9px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export { Container, Wrap, WrapCon, Flexing, Box };
