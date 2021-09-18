import React from 'react';
import PropTypes from 'prop-types';

import './label.css';

/**
 * Primary UI component for text label
 */
export const TextLabel = ({ label, primary, className }) => {
  return (
    <span className={`${className} ${primary ? 'text-primary' : ''}`}>
      {label}
    </span>
  );
};

TextLabel.propTypes = {
  /**
   * Text label
   */
  label: PropTypes.string.isRequired,
  /**
   * Is text primary?
   */
  primary: PropTypes.bool,
  /**
   * Optional className
   */
  className: PropTypes.string,
};

TextLabel.defaultProps = {
  primary: false,
  className: '',
}
