import React from 'react';
import { Wrap } from './style';

const Button = ({
  width,
  height,
  background,
  size,
  color,
  border,
  radius,
  padding,
  margin,
  shadow,
  children,
  hide,
  onClick,
}) => {
  return (
    <Wrap
      width={width}
      height={height}
      background={background}
      size={size}
      border={border}
      color={color}
      radius={radius}
      padding={padding}
      margin={margin}
      shadow={shadow}
      hide={hide}
      onClick={onClick}
    >
      {children}
    </Wrap>
  );
};

export default Button;
