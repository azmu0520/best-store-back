import React from 'react';
import { Wrap } from './style';

const Button = ({
  width,
  height,
  background,
  size,
  color,
  radius,
  padding,
  margin,
  shadow,
  children,
}) => {
  return (
    <Wrap
      width={width}
      height={height}
      background={background}
      size={size}
      color={color}
      radius={radius}
      padding={padding}
      margin={margin}
      shadow={shadow}
    >
      {children}
    </Wrap>
  );
};

export default Button;
