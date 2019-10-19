import React from 'react';

const Input = ({ id, inheritedClass, containerClass, ...otherProps }) => {
  return (
    <label
      htmlFor={id}
      className={`${containerClass}`}
    >
      <input className={`${inheritedClass}`} id={id} {...otherProps}/>
    </label>
  );
}

Input.defaultProps = {
  containerClass: '',
  inheritedClass: '',
};

export default Input;
