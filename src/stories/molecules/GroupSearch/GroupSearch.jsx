import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import './group-search.css';

/**
 * Render search UI
 */
export const GroupSearch = ({ placeholder, buttonLabel, value, onChange, onSearch }) => {
  return (
    <div className="group-search">
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Button
        primary
        size="small"
        label={buttonLabel}
        onClick={onSearch}
      />
    </div>
  );
};

GroupSearch.propTypes = {
  /**
   * Placeholder of group search
   */
  placeholder: PropTypes.string,
  /**
   * Button label of group search
   */
  buttonLabel: PropTypes.string.isRequired,
  /**
   * Value of input
   */
  value: PropTypes.string,
  /**
   * Optional change value handler
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Optional click handler
   */
  onSearch: PropTypes.func.isRequired,
};

GroupSearch.defaultProps = {
  placeholder: '',
  value: '',
};
