import React from 'react';
import { advantageData } from '../../../mock/advantage';
import { Wrap } from './style';

const Advantage = () => {
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Header className='header'>
          Bizning ustun <span className='span'>jihatlarimiz</span>
        </Wrap.Header>
        <Wrap.Text className='text'>
          Quyida bizning ustun jihatlarimiz bilan tanishing
        </Wrap.Text>
        <Wrap.CardWrap>
          {advantageData.map((item) => (
            <Wrap.Card key={item.id}>
              <item.Icons className='icons' />
              <Wrap.CardText>{item.title}</Wrap.CardText>
              <Wrap.SubTitle>{item.descr}</Wrap.SubTitle>
            </Wrap.Card>
          ))}
        </Wrap.CardWrap>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Advantage;
