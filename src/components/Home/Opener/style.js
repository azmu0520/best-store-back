import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { ReactComponent as Github } from '../../../assets/icons/github.svg';
import { ReactComponent as Safe } from '../../../assets/icons/safe.svg';
export const Wrap = styled.div`
  background: #f8fafc;
  /* height: 90vh; */
  padding: 23px;
  box-sizing: border-box;
`;
Wrap.Wrap = styled.div`
  max-width: 860px;
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

  padding-top: 100px;
  span {
    color: #1d72d2;
  }
  @media (max-width: 1000px) {
    font-size: 30px;
    line-height: 36px;
    color: #1d72d2;
    padding-top: 80px;

    span {
      color: #323a56;
    }
  }
`;

Wrap.Descript = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #8a90a5;
  margin-top: 28px;

  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
  }
`;

Wrap.Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto;
  padding-bottom: 60px;

  @media (max-width: 1000px) {
    margin: 40px auto 10px auto;
    flex-direction: column;
    /* padding-bottom: 40px; */
  }
`;
Wrap.Github = styled(Github)`
  margin-right: 10px;
`;
Wrap.Arrow = styled(Arrow)`
  margin-left: 14px;
  path {
    fill: #fff;
  }
`;

Wrap.Safe = styled(Safe)`
  margin-right: 14px;
`;

Wrap.Special = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
  padding: 17px 30px;
  width: 290px;
  height: 90px;
  background: #f4fff4;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

Wrap.SafeText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #70c63b;
  span {
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    color: #323a56;

    margin-bottom: 6px;
  }
`;
