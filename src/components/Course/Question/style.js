import styled from 'styled-components';
import { Collapse } from 'antd';
import { ReactComponent as tick } from '../../../assets/icons/check.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

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
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  color: #323a56;
  width: 60%;
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

export const CollapseStyle = styled(Collapse)``;

CollapseStyle.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #8a90a5;
  width: 90%;
`;

export const Flexing = styled.div`
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
`;

Flexing.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #323a56;
  margin-left: 20px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

// tick
export const Wrap = styled.div`
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
