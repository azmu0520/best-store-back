import React from 'react';
import { Wrap } from './style';
import logo from '../../assets/imgs/logo.png';
import { data } from '../../utilits/navbar';
import { NavLink, Outlet } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <Wrap>
        <Wrap.Wrap>
          <Wrap.LogoWrap>
            <Wrap.Logo src={logo} />
            <Wrap.LogoText>
              WebBrain <span>Academy</span>
            </Wrap.LogoText>
          </Wrap.LogoWrap>
          <Wrap.Links>
            {data.map((item) => (
              <Wrap.Link key={item.id}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </Wrap.Link>
            ))}
            <Wrap.Search />
            <Wrap.Btn>
              Kirish <Wrap.Arrow />
            </Wrap.Btn>
          </Wrap.Links>
        </Wrap.Wrap>
      </Wrap>
      <Outlet />
    </>
  );
};

export default Navbar;
