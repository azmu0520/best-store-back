import styled from 'styled-components';
import { Collapse } from 'antd';
import { ReactComponent as tick } from '../../../assets/icons/check.svg';

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 100px auto;
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

  .ant-collapse {
    width: 100%;
    border: none;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    background: #ffffff;
    border: 1px solid #eff2f7 !important;
    border-radius: 6px;
    padding: 25px 30px;
    margin: 4px 0px;
  }
  .ant-collapse > .ant-collapse-item {
    border: none !important;
  }

  .ant-collapse-item-active {
    box-shadow: 0px 16px 20px rgba(32, 81, 137, 0.08);
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 25px 100px 25px 30px;
  }

  .ant-collapse-content {
    border: none;
    background: #ffffff;
    border: 1px solid #eff2f7;
    border-radius: 6px;
    height: 100%;
    margin-top: 10px;
    position: relative;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    display: block;
  }

  .ant-collapse-item {
    position: relative;
  }

  .ant-collapse-item::before {
    content: '+';
    background: #eff2f7;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    /* line-height: 24px; */
    color: #1d72d2;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    right: 20px;
    z-index: 999;
  }

  .ant-collapse-item-active::before {
    content: '-';
  }

  .ant-collapse-item-active .text {
    color: #1d72d2;
  }

  .ant-collapse-expand-icon {
    display: none;
  }

  p {
    margin: 0;
  }

  @media (max-width: 900px) {
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      padding: 20px;
      padding-right: 30px;
    }
    .ant-collapse-content > .ant-collapse-content-box {
      padding: 25px 20px 25px 20px;
    }
  }
  @media (max-width: 600px) {
    .ant-collapse-item::before {
      width: 40px;
      height: 40px;
      font-size: 16px;
      top: 20px;
    }
  }
`;

Container.Header = styled.div`
  width: 60%;
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

const CollapseStyle = styled(Collapse)``;

CollapseStyle.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #8a90a5;
  width: 90%;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const Flexing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

Flexing.Circle = styled.div`
  background: #eff2f7;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1d72d2;
  border-radius: 50%;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

Flexing.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #323a56;
  margin-left: 20px;
  padding-right: 20px;
  @media (max-width: 1150px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    width: 80%;
    text-align: left;
  }
  @media (max-width: 600px) {
    width: 70%;
    line-height: 20px;
    font-size: 16px;
  }
  @media (max-width: 420px) {
    width: 70%;
    line-height: 16px;
    font-size: 12px;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

// tick
const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

Wrap.TickCon = styled.div`
  background: #f4fff4;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 34px;
`;

Wrap.Icons = styled(tick)``;

export { Container, Wrap, Flexing, Div, CollapseStyle };
