import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    line-height: 48px;
  }
  @media (max-width: 900px) {
    font-size: 34px;
    line-height: 40px;
  }
  @media (max-width: 600px) {
    font-size: 26px;
    line-height: 34px;
  }
`;

Container.Text = styled.div`
  width: 35%;
  margin: 16px 0px 50px 0px;
  @media (max-width: 1150px) {
    width: 70%;
    font-size: 16px;
    line-height: 24px;
    margin: 9px 0px 20px 0px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

Container.Video = styled.iframe`
  border-radius: 10px 0px 0px 10px;
  width: 100%;
  height: 70vh;
  @media (max-width: 1150px) {
    height: 40vh;
  }
  @media (max-width: 600px) {
    height: 30vh;
  }
`;
