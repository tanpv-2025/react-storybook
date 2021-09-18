import React from 'react';
import PropTypes from 'prop-types';
import './menu-item.css';

export const MenuItem = ({ label, path, className, isSelected }) => {
  return (
    <li
      key={path}
      className={`${className} menu-item ${isSelected ? 'menu-item--selected' : ''}`}
    >
      <span>{label}</span>
    </li>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isSelected: PropTypes.bool,
};

MenuItem.defaultProps = {
  className: '',
  isSelected: false,
};
