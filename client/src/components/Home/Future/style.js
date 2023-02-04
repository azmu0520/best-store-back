import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
export const Wrap = styled.div`
  background: #fff;
  /* height: 90vh; */
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
  padding: 0 300px;

  padding-top: 100px;
  span {
    color: #1d72d2;
  }
`;

Wrap.Descript = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #8a90a5;
  margin-top: 28px;
`;

Wrap.Arrow = styled(Arrow)`
  margin-left: 14px;

  path {
    fill: #fff;
  }
`;
