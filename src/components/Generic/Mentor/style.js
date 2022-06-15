import styled from 'styled-components';
import { ReactComponent as Tel } from '../../../assets/icons/tel.svg';
import { ReactComponent as Msg } from '../../../assets/icons/msg.svg';
import { ReactComponent as Location } from '../../../assets/icons/location.svg';
import { ReactComponent as Insta } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';
import { ReactComponent as Telegram } from '../../../assets/icons/telegram.svg';
import { ReactComponent as Youtube } from '../../../assets/icons/youtube.svg';
export const Wrap = styled.div``;

Wrap.Wrap = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
`;

Wrap.Title = styled.div`
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  color: #1d72d2;
  span {
    color: #323a56;
  }
`;

Wrap.Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #8a90a5;
  margin: 16px 0 50px 0;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  height: 590px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #eff2f7;
  border-radius: 6px;
`;

Wrap.Img = styled.img`
  flex: 51;
  height: 100%;
`;

Wrap.About = styled.div`
  height: 100%;
  flex: 77;
  padding: 50px 60px;
`;

Card.Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #323a56;
`;

Card.Desc = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #8a90a5;
  padding: ${({ job }) => (job === 'true' ? '10px 0 30px 0' : '0 0 30px 0')};
`;

Card.Wrap = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8a90a5;
  padding-bottom: ${({ last }) => (last === 'true' ? '30px' : '17px')};
`;

Card.Tel = styled(Tel)`
  margin-right: 12px;
`;
Card.Msg = styled(Msg)`
  margin-right: 12px;
`;
Card.Location = styled(Location)`
  margin-right: 12px;
`;

Card.Insta = styled(Insta)`
  width: 50px;
  height: 50px;
  background: #ffffff;
  :hover {
    background: #1d72d2;
    path {
      stroke: #fff;
    }
  }
  border: 1px solid #eff2f7;
  border-radius: 50%;
  margin-right: 16px;
  padding: 12px;
  path {
    fill: #1d72d2;
  }
`;
Card.Telegram = styled(Telegram)`
  width: 50px;
  height: 50px;
  background: #ffffff;
  :hover {
    background: #1d72d2;
    path {
      stroke: #fff;
    }
  }
  border: 1px solid #eff2f7;
  border-radius: 50%;
  margin-right: 16px;
  padding: 12px;

  path {
    stroke: #1d72d2;
  }
`;
Card.Facebook = styled(Facebook)`
  width: 50px;
  height: 50px;
  background: #ffffff;
  :hover {
    background: #1d72d2;
    path {
      stroke: #fff;
    }
  }
  border: 1px solid #eff2f7;
  border-radius: 50%;
  margin-right: 16px;
  padding: 12px;
`;
Card.Youtube = styled(Youtube)`
  width: 50px;
  height: 50px;
  border: 1px solid #eff2f7;
  border-radius: 50%;
  padding: 12px;
  background: #ffffff;
  :hover {
    background: #1d72d2;
    path {
      stroke: #fff;
    }
  }
`;

export const Full = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 40px;
  height: 520px;
  margin-top: 40px;
`;

Full.Descript = styled.div`
  padding: 40px;
  background: #ffffff;
  border: 1px solid #eff2f7;
  border-radius: 6px;
`;

Full.Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #323a56;
  margin-bottom: 20px;
`;

Full.Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #8a90a5;
`;
Full.SkillTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #323a56;
`;

Full.SkilWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
