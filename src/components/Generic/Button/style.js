import styled from 'styled-components';

export const Wrap = styled.div`
  width: ${({ width }) => (width ? width : '194px')};
  height: ${({ height }) => (height ? height : '64px')};
  background: ${({ background }) => (background ? background : '#1D72D2')};
  size: ${({ size }) => (size ? size : '18px')};
  color: ${({ color }) => (color ? color : '#fff')};
  border-radius: ${({ radius }) => (radius ? radius : '8px')};
  padding: ${({ padding }) => (padding ? padding : '20px 40px')};
  margin: ${({ margin }) => (margin ? margin : '')};
  box-shadow: ${({ shadow }) =>
    shadow ? shadow : '0px 7px 12px rgba(32, 81, 137, 0.24)'};
`;
