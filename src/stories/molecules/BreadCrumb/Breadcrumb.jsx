import React from 'react';
import PropTypes from 'prop-types';

import { TextLabel } from '../../atoms/TextLabel/TextLabel';
import './breadcrumb.css';

/**
 * Render Breadcrumb
 */
export const Breadcrumb = ({ routes, separator, className }) => {
  return (
    <div className={`${className} breadcrumb`}>
      {routes.map((item, index) => {
        const itemEnd = index === routes.length - 1 ? 'breadcrumb--item-end' : '';
        const itemLink = `${item.path ? 'breadcrumb--item-link' : ''}`;
        const className = [itemEnd, itemLink].join(' ');

        return (
          <>
            <TextLabel
              label={item.label}
              className={className}
            />
            {![routes.length - 1].includes(index) && (
              <TextLabel label={separator} className="breadcrumb-separator" />
            )}
          </>
        );
      })}
    </div>
  );
};

Breadcrumb.propTypes = {
  /**
   * Routes of breadcrumb
   */
  routes: PropTypes.arrayOf(PropTypes.objectOf({
    label: PropTypes.string.isRequired,
    path: PropTypes.string,
  })),
  /**
   * Separator component of breadcrumb
   */
  separator: PropTypes.node,
  /**
   * Optional className
   */
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  className: '',
  separator: '/',
};
