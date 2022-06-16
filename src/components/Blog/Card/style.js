import styled from 'styled-components';

// icons
import { ReactComponent as User } from '../../../assets/icons/user-blog.svg';
import { ReactComponent as Calendar } from '../../../assets/icons/calendar.svg';
import { ReactComponent as Comment } from '../../../assets/icons/comment.svg';

export const Card = styled.div`
  max-width: 840px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #eff2f7;
  box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.06);
  border-radius: 6px;
  margin: 20px 0px;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Card.Body = styled.div`
  padding: 40px;
`;

Flexing.Div = styled.div`
  display: flex;
  align-items: center;
`;

Flexing.User = styled(User)``;
Flexing.Calendar = styled(Calendar)``;
Flexing.Comment = styled(Comment)``;

Flexing.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8a90a5;
  margin-left: 14px;
`;

Card.Img = styled.img`
  border-radius: 6px 6px 0px 0px;
  width: 100%;
`;

Card.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: #323a56;
  margin: 35px 0 20px;
`;

Card.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #8a90a5;
`;
