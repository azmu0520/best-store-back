import React from 'react';
import { Wrap } from './style';
import Button from '../../Generic/Button';
const Opener = () => {
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Text>
          <span>Dasturlashni</span> biz bilan qulay muhitda o‘rganing
        </Wrap.Text>
        <Wrap.Descript>
          Webbrain - bu siz izlagan akademiya bo’lib, unda siz juda qisqa
          muddatda istalgan dasturlash sohasida Junior darajasiga chiqa olasiz!
        </Wrap.Descript>
        <Wrap.Btns>
          <Button margin='0 16px 0  0'>
            Boshlash <Wrap.Arrow />
          </Button>
          <Button
            border='1px solid #EFF2F7'
            background={'#EFF2F7'}
            color='#323A56'
            width={'176px'}
          >
            <Wrap.Github />
            Github
          </Button>
        </Wrap.Btns>
        <Wrap.Special>
          <Wrap.Safe />
          <Wrap.SafeText>
            <span>GitNation React Award</span>
            Most Impactful Project to the Community
          </Wrap.SafeText>
        </Wrap.Special>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Opener;
