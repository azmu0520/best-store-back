import styled from 'styled-components';

export const Wrap = styled.div`
  background: #f8fafc;
`;

Wrap.Wrap = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 100px auto 0 auto;
  padding-bottom: 70px;
  @media (max-width: 800px) {
    padding-bottom: 40px;
  }
`;

Wrap.Title = styled.div``;

Wrap.Desc = styled.div`
  max-width: 630px;

  margin: 16px auto 50px auto;
`;

Wrap.Number = styled.div`
  font-weight: 900;
  font-size: 138px;
  line-height: 167px;
  color: #f8fafc;
  padding-left: 23px;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  background: #ffffff;
  height: 230px;
  border: 1px solid #eff2f7;
  border-radius: 10px;
  padding: 40px;

  :hover {
    box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.06);
  }
  &:hover ${Wrap.Number} {
    color: #eff2f7;
    transition: all 0.8;
  }
  transition: all 0.8;
`;
Card.Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 40px;
  grid-gap: 40px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    margin: 0 100px;
    grid-gap: 20px;
  }
  @media (max-width: 800px) {
    margin: 0 20px;
  }
`;
Card.Info = styled.div`
  display: flex;
  flex-direction: column;
`;
Card.Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #1d72d2;
`;

Card.Name = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #323a56;
  margin: 10px 0 18px 0;
`;

Card.Descript = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8a90a5;
`;
