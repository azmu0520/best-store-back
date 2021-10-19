import React from 'react';
import { Wrapper, Logo, Dashboard, Media } from './style';

const Navbar = () => {
  return (
    <Wrapper>
      <Logo.Wrap>
        <Logo />
        <Logo.Text>WebBrain Academy</Logo.Text>
      </Logo.Wrap>
      <Dashboard>
        <Dashboard.Item exact to='/home'>
          Home
        </Dashboard.Item>
        <Dashboard.Item exact to='/teams'>
          Team
        </Dashboard.Item>
        <Dashboard.Item exact to='/courses'>
          Courses
        </Dashboard.Item>
        <Dashboard.Item exact to='contact'>
          Contact
        </Dashboard.Item>
      </Dashboard>
      <Media>YouTube Instagram </Media>
    </Wrapper>
  );
};

export default Navbar;
