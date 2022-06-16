import React from 'react';
import { Flexing, Wrap } from './style';
import Button from '../../Generic/Button';

const Opener = () => {
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Header className='header'>
          <span className='span'>Dasturlashni</span> biz bilan qulay muhitda
          o‘rganing
        </Wrap.Header>
        <Wrap.Text className='text'>
          Webbrain - bu siz izlagan akademiya bo’lib, unda siz juda qisqa
          muddatda istalgan dasturlash sohasida Junior darajasiga chiqa olasiz!
        </Wrap.Text>

        {/* btn */}
        <Wrap.Btns>
          <Button margin='0 16px 20px  0'>
            Boshlash <Wrap.Arrow />
          </Button>
          <Button
            border='1px solid #EFF2F7'
            background={'#EFF2F7'}
            color='#323A56'
          >
            <Wrap.Github />
            Github
          </Button>
        </Wrap.Btns>

        <Flexing>
          <Flexing.Tick />
          <div>
            <Flexing.Title>Sardorbek Mukhtorov</Flexing.Title>
            <Flexing.Text>
              Ey yigit o'qi johillik ordur <br></br> Unga faqat eshshak rozi
              bo'lur
            </Flexing.Text>
          </div>
        </Flexing>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Opener;
