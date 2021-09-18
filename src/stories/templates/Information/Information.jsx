import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../organisms/Header/Header';
import { Footer } from '../../organisms/Footer/Footer';
import { Breadcrumb } from '../../molecules/BreadCrumb/Breadcrumb';
import './info.css';

export const Information = ({ user, onLogin, onLogout, onCreateAccount, leftContent, rightContent }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <section>
      <Breadcrumb
        routes={[
          {
            label: 'Breadcumb 1',
          },
          {
            label: 'Breadcumb 2',
            path: '/menu2',
          },
          {
            label: 'Breadcumb 3',
            path: '/menu3',
          },
          {
            label: 'Breadcumb 4',
          },
        ]}
        separator=">"
      />
      <h2>Information</h2>
      <div className="main-content">
        <div className="left-content">
          {leftContent}
        </div>
        <div className="right-content">
          {rightContent}
        </div>
      </div>
    </section>
    <Footer />
  </article>
);
Information.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

Information.defaultProps = {
  user: null,
  leftContent: null,
  rightContent: null,
};
