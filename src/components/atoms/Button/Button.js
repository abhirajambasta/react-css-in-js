import React from 'react';
import withStyles from '../../../core/hoc/withStyles';

import styles from './Button.style';

const Button = ({ className, inheritedClass, type, disabled, children, ...others }) => {
  return (
    <button
      className={`${inheritedClass} ${className}`}
      type={type}
      disabled={disabled}
      {...others}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  inheritedClass: '',
  type: 'button',
  disabled: false,
};

export default withStyles(Button, styles);
