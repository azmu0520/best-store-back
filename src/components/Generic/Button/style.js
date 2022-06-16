import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: ${({ width }) => (width ? width : '194px')};
  height: ${({ height }) => (height ? height : '64px')};
  background: ${({ background }) => (background ? background : '#1D72D2')};
  font-size: ${({ size }) => (size ? size : '18px')};
  color: ${({ color }) => (color ? color : '#fff')};
  border-radius: ${({ radius }) => (radius ? radius : '8px')};
  padding: ${({ padding }) => (padding ? padding : '20px 40px')};
  border: ${({ border }) => (border ? border : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  box-shadow: ${({ shadow }) =>
    shadow ? shadow : '0px 7px 12px rgba(32, 81, 137, 0.24)'};
  display: ${({ hide }) => hide && 'none'};
  cursor: pointer;
  user-select: none;
  :active {
    transform: scale(0.98);
  }
`;
