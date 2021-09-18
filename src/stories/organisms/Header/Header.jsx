import React from 'react';
import PropTypes from 'prop-types';

import StoryLoGo from '../../assets/story-logo.svg';
import { Button } from '../../atoms/Button/Button';
import { SVG } from '../../atoms/SVG/SVG';
import { Menu } from '../../molecules/Menu/Menu';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className={`wrapper ${!user ? 'wrapper--no-user' : ''}`}>
      <div>
        <SVG src={StoryLoGo} width={32} height={32} />
        <h1>Storybook</h1>
      </div>
      {user && (
        <Menu
          paths={[
            {
              label: 'Menu 1',
              path: '/menu1',
            },
            {
              label: 'Menu 2',
              path: '/menu2',
            },
            {
              label: 'Menu 3',
              path: '/menu3',
            }
          ]}
        />
      )}
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" backgroundColor="white" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" backgroundColor="white" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
