import styled from 'styled-components';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { Modal } from 'antd';
import { Link, NavLink } from 'react-router-dom';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 86px;
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
  padding: 0 40px;
  @media (max-width: 800px) {
    padding: 0 20px;
    .active::after {
      transform: scale(1);
    }
    .active {
      color: #1d72d2;
    }
  }
`;
Wrap.Wrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: auto;
  @media (max-width: 1000px) {
    justify-content: space-between;
  }
`;

Wrap.LogoWrap = styled(Link)`
  display: flex;
  align-items: center;
`;

Wrap.Logo = styled(Logo)``;

Wrap.Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  width: 620px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

Wrap.Link = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #323a56;
  a {
    color: initial;
    text-decoration: none !important;
  }
`;

const NavLinkItem = styled(NavLink)`
  position: relative;

  ::after {
    content: '';
    width: 120%;
    height: 2px;
    position: absolute;
    bottom: -10px;
    left: -5px;
    background-color: #1d72d2;
    transform: scale(0);
    transform-origin: left;
    transition: all 0.5s;
  }
  :hover::after {
    transform: scale(1);
  }
`;

Wrap.Search = styled(Search)``;
Wrap.Arrow = styled(Arrow)`
  margin-left: 10px;
`;

Wrap.Logo = styled(Logo)``;
Wrap.Btn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  box-sizing: border-box;
  height: 44px;
  background: #f8fafc;
  border: 1px solid #eff2f7;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  :active {
    transform: scale(0.98);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Wrap.Avatar = styled.div`
  position: relative;
  margin-left: 40px;
  span {
    position: absolute;
    width: 12px;
    height: 12px;
    bottom: 0;
    right: 0px;
    border-radius: 50%;
    background: #70c63b;
    border: 2px solid #ffffff;
  }
`;

Wrap.Img = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

Wrap.Menu = styled(Menu)`
  /* margin-left: 20px; */
  display: none;
  cursor: pointer;
  @media (max-width: 1000px) {
    display: block;
  }
`;

Wrap.Modal = styled(Modal)`
  margin: 0 !important;
  margin-left: 0 !important;
  top: 0 !important;
  .ant-modal-body {
    padding: 50px 24px;
  }
  .ant-modal-close {
    left: 0 !important;
  }
`;

export const Modals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
`;

Modals.Link = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #323a56;
  margin-bottom: 30px;
  a {
    color: initial;
    text-decoration: none !important;
  }
`;

export { Wrap, Container, NavLinkItem };
