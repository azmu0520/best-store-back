import styled, { css } from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as Global } from '../../assets/icons/global.svg';

const center = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${center}
  background-color: #fff;
  height: 73px;
  width: 100%;
  position: fixed;
  z-index: 11;
  border-bottom: 1px solid #d4d4d4;
`;
export const Icon = styled.div``;

export const Wrap = styled.div`
  ${center}
  max-width: 1145px;
  width: 100%;
  margin: 0 auto;
`;

Wrap.Links = styled.ul`
  ${center}
`;

Wrap.Logo = styled.img`
  width: 10.125em;
`;

export const Search = styled.form`
  ${center}
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 16%) 0 2px 2px 0, rgb(0 0 0 / 8%) 0 0 0 1px;
  height: 42px;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 525px;
`;

Search.Input = styled.input`
  padding: 10px 5px;
  border: none;
  background-color: #fff;
  color: #222;
  display: block;
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  white-space: nowrap;
  outline: none;
  width: 100%;
`;
Search.Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 46px;
`;
Icon.Search = styled(SearchIcon)``;

export const Controllers = styled.div`
  ${center}
`;

Icon.Lang = styled(Global)`
  fill: white;
`;

Wrap.Language = styled.div`
  ${center}
  color: var(--gray);
  font-size: 18px;
  margin: 5px 15px 15px 0;
`;

Wrap.LangImage = styled.img`
  width: 40px;
  height: 20px;
  margin-right: 15px;
`;
