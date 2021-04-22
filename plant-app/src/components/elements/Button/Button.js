import React from 'react';
import { string, func } from 'prop-types';

export const ButtonComponent = ({children, className, onClick }) => (
    <button className={className} onClick={onClick} >{children}</button>
);

ButtonComponent.propTypes = {
  children: string.isRequired,
  className: string,
  onClick: func,
  //variant: oneOf(['primary', 'info', 'dark', 'success']),
};

ButtonComponent.defaultProps = {
 className: "buyButton",
 onClick: () => {},
}