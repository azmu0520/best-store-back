import styled from 'styled-components';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 86px;
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
`;
Wrap.Wrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: auto;
`;

Wrap.LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;
Wrap.Logo = styled.img``;
Wrap.LogoText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #1d72d2;
  margin-left: 12px;
  span {
    font-weight: 400;
    font-size: 16px;
  }
`;

Wrap.Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  width: 620px;
`;

Wrap.Link = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #323a56;
  a {
    color: initial;
    text-decoration: none !important;
  }
`;

Wrap.Search = styled(Search)``;
Wrap.Arrow = styled(Arrow)`
  margin-left: 10px;
`;

Wrap.Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 114px;
  height: 44px;
  background: #f8fafc;
  border: 1px solid #eff2f7;
  border-radius: 8px;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export { Wrap , Container};

