import React from 'react';
import { string } from 'prop-types';

export const ButtonComponent = ({children, className}) => (
    <button className={className}>{children}</button>
);

ButtonComponent.propTypes = {
  children: string.isRequired,
  className: string
  //variant: oneOf(['primary', 'info', 'dark', 'success']),
};

ButtonComponent.defaultProps = {
 className: "buyButton"
}