import styled from 'styled-components';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  box-sizing: border-box;
  height: 80px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  box-shadow: 0px 0px 12px 0px rgba(73, 75, 116, 0.16);
  z-index: 10;
`;

export const Logo = styled(logo)`
  width: 75px;
  height: 75px;
`;
Logo.Text = styled.div``;
Logo.Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Dashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 350px;
`;

Dashboard.Item = styled(NavLink)`
  cursor: pointer;
`;

export const Media = styled.div``;
