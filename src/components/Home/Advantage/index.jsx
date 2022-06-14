import React from 'react';

import { Wrap } from './style';

const Advantage = () => {
  let count = [1, 2, 3, 4, 5, 6];
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Text>
          Bizning ustun <span>jihatlarimiz</span>
        </Wrap.Text>
        <Wrap.Descript>
          Quyida bizning ustun jihatlarimiz bilan tanishing
        </Wrap.Descript>
        <Wrap.CardWrap>
          {count.map((item) => (
            <Wrap.Card key={item}>
              <Wrap.Moon />
              <Wrap.CardText>Kuchli Mentorlar</Wrap.CardText>
              <Wrap.SubTitle>
                Webbrain UI strictly follows WAIARIA standarts for all
                components strictly follows.
              </Wrap.SubTitle>
            </Wrap.Card>
          ))}
        </Wrap.CardWrap>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Advantage;
