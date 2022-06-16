import React, { useState } from 'react';
import { Modals, Wrap, NavLinkItem } from './style';
import { data } from '../../utilits/navbar';
import { NavLink, Outlet } from 'react-router-dom';
// compoenent
import Footer from '../Footer';
import img from '../../assets/imgs/avatar.png';

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Wrap>
        <Wrap.Modal
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          centered={false}
          width='300px'
        >
          <Modals>
            {data.map((item) => (
              <Modals.Link key={item.id}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </Modals.Link>
            ))}
          </Modals>
        </Wrap.Modal>
        <Wrap.Wrap>
          <Wrap.Menu onClick={showModal} />
          {/* <Wrap.Logo /> */}
          {/* <Wrap.Links>
            {data.map((item) => (
              <Wrap.Link key={item.id}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </Wrap.Link>
            ))}
          </Wrap.Links> */}
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
          <Wrap.Avatar>
            <Wrap.Img src={img} />
            <span />
          </Wrap.Avatar>
        </Wrap.Wrap>
      </Wrap>

      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Navbar;
