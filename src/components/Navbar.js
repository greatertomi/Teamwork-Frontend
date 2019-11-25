import React from 'react';
import { NavLink, Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import AdminLogin from './AdminLogin';

const Header = () => (
  // eslint-disable-next-line no-unused-expressions
  <div>
    <BrowserRouter>
      <nav className='navbar navbar-dark bg-dark'>
        <NavLink className='navbar-brand' to='/'>
          TeamWork
        </NavLink>

        <span>
          <NavLink to='/login' className='navLink' activeClassName='active'>
            Employee Login
          </NavLink>
          <NavLink
            to='/adminLogin'
            className='navLink'
            activeClassName='active'
          >
            Admin Login
          </NavLink>
        </span>
      </nav>
      <Switch>
        <Route path='/' component={LoginForm} exact={true} />
        <Route path='/login' component={LoginForm} />
        <Route path='/adminLogin' component={AdminLogin} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Header;
