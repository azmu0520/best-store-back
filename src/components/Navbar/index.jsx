import React from 'react';
import { NavLinkItem, Wrap } from './style';
import { data } from '../../utilits/navbar';
import { Outlet } from 'react-router-dom';
// compoenent
import Footer from '../Footer';

const Navbar = () => {
  return (
    <>
      <Wrap>
        <Wrap.Wrap>
          <Wrap.LogoWrap to='/main'>
            <Wrap.Logo />
          </Wrap.LogoWrap>
          <Wrap.Links>
            {data.map((item) => {
              return (
                !item.hidden && (
                  <Wrap.Link key={item.id}>
                    <NavLinkItem className='items' to={item.path}>
                      {item.title}
                    </NavLinkItem>
                  </Wrap.Link>
                )
              );
            })}
            <Wrap.Btn to='/contact'>
              Bog'lanish <Wrap.Arrow />
            </Wrap.Btn>
          </Wrap.Links>
        </Wrap.Wrap>
      </Wrap>

      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
