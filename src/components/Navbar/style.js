import styled from 'styled-components';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 86px;
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
  .active::after {
    transform: scale(1);
  }
  .active {
    color: #1d72d2;
  }
`;
Wrap.Wrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: auto;
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

export { Wrap, Container, NavLinkItem };
