import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({ src, alt, width, height }) => {
  return (
    <img src={src} alt={alt} width={width} height={height} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Image.defaultProps = {
  alt: '',
  width: 200,
  height: 200,
};
