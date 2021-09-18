import React from 'react';
import PropTypes from 'prop-types';

import { MenuItem } from '../../atoms/MenuItem/MenuItem';
import './menu.css';

export const Menu = ({ paths, mode, className }) => {
  return (
    <ul className={`${className} menu menu--${mode}`}>
      {paths.map((item, index) => (
        <MenuItem path={item.path} label={item.label} isSelected={index === 1} />
      ))}
    </ul>
  );
};

Menu.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.objectOf({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  mode: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
};

Menu.defaultProps = {
  paths: [],
  mode: 'horizontal',
  className: '',
};
