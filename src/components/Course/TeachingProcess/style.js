import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
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
  color: #323a56;
`;

Container.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #8a90a5;
  width: 35%;
  margin: 16px 0px 50px 0px;
`;

Container.Video = styled.iframe`
  border-radius: 10px 0px 0px 10px;
  width: 100%;
  height: auto;
  object-fit: contain;
  min-height: 700px;
`;
