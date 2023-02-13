import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { data } from '../../utilits/navbar';
import { Container, Icon, Search, Wrap, Controllers } from './style';
import logo from '../../assets/images/logo.png';
import flag_en from '../../assets/images/flag-en.png';
import flag_ru from '../../assets/images/flag-ru.png';
import { Button, Modal } from 'antd';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Container>
        <Wrap>
          <Wrap.Logo src={logo} />
          <Search>
            <Search.Input className='search_input' />
            <Search.Btn type='submit'>
              <Icon.Search />
            </Search.Btn>
          </Search>
          <Controllers>
            <Button type='primary' style={{ borderRadius: '2px' }}>
              Log in
            </Button>
            <Button
              type='primary'
              style={{ borderRadius: '2px' }}
              onClick={() => setIsModalOpen(true)}
            >
              <Icon.Lang />
            </Button>
            <Modal
              title='Choose Language'
              open={isModalOpen}
              onCancel={() => setIsModalOpen(false)}
              footer={null}
              width={360}
              bodyStyle={{ borderRadius: '18px' }}
              centered
            >
              <Wrap.Language>
                <Wrap.LangImage src={flag_en} /> English
              </Wrap.Language>
              <Wrap.Language>
                <Wrap.LangImage src={flag_ru} /> Russion
              </Wrap.Language>
            </Modal>
          </Controllers>
        </Wrap>
      </Container>
      {/* {data.map(
        (item) =>
          !item.private && (
            <Container key={item.id}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </Container>
          )
      )} */}
      <Outlet />
    </>
  );
};

export default Navbar;
