import styled from 'styled-components';

// icons
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { ReactComponent as Github } from '../../../assets/icons/github.svg';
import tick from '../../../assets/imgs/tick.png';

const Wrap = styled.div`
  background: #f8fafc;
  /* height: 90vh; */
  padding: 23px;
  box-sizing: border-box;
`;

Wrap.Wrap = styled.div`
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Wrap.Header = styled.div`
  padding-top: 100px;
`;

Wrap.Text = styled.div`
  margin-top: 28px;

  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
  }
`;

Wrap.Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto;
`;

Wrap.Github = styled(Github)`
  margin-right: 10px;
`;

Wrap.Arrow = styled(Arrow)`
  margin-left: 14px;
  path {
    fill: #fff;
  }
`;

const Flexing = styled.div`
  background: #f4fff4;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 17px 24px;
  width: fit-content;
`;

Flexing.Tick = styled.img.attrs({
  src: tick,
})`
  margin-right: 12px;
`;

Flexing.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12spx;
  line-height: 12px;
  color: #323a56;
`;

Flexing.Text = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #70c63b;
  margin-top: 10px;
`;

export { Wrap, Flexing };
