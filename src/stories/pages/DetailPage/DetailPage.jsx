import React from 'react';
import PropTypes from 'prop-types';

import { Information } from '../../templates/Information/Information';

export const DetailPage = ({ user, onLogin, onLogout, onCreateAccount, leftContent, rightContent }) => (
  <Information
    user={user}
    onLogin={onLogin}
    onLogout={onLogout}
    onCreateAccount={onCreateAccount}
    leftContent={leftContent}
    rightContent={rightContent}

  />
);
DetailPage.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  leftContent: PropTypes.node.isRequired,
  rightContent: PropTypes.node.isRequired,
};

DetailPage.defaultProps = {
  user: null,
};
