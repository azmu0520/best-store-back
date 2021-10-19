import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Body, Wrapper } from './style';
import { Routes } from '../../utils/sidebar';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route path='/dashboard' />
          <Route path='/teams' />
          <Route path='/courses' />
          <Route path='/contact' />
          <Route>
            <Redirect to='/dashboard' />
          </Route>
        </Switch>
      </Wrapper>
      <Body>
        {Routes.map(({ path, component, child }, index) => (
          <Route exact key={`${index}+1`} path={path} component={component} />
        ))}
      </Body>
    </div>
  );
};

export default Home;
