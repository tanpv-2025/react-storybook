import React from 'react';
import PropTypes from 'prop-types';
import SVGComponent from 'react-inlinesvg';

/**
 * Component to render svg
 */
export const SVG = ({ src, width, height }) => {
  return (
    <SVGComponent src={src} width={width} height={height} />
  );
};

SVG.propTypes = {
  /**
   * Source data
   */
  src: PropTypes.string.isRequired,
  /**
   * width of svg
   */
  width: PropTypes.number,
  /**
   * height of svg
   */
  height: PropTypes.number,
};

SVG.defaultProps = {
  width: 16,
  height: 16,
};
