import React from 'react';
import Button from '../../Generic/Button';
import { Wrap } from './style';

const Future = () => {
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Text>
          Kelajagingizni <span> Webbrain bilan </span> quring
        </Wrap.Text>
        <Wrap.Descript>
          A collection of websites and projects built with Webbrain UI
        </Wrap.Descript>
        <Button margin={'50px auto 70px auto'}>
          Ko’proq ko’rish
          <Wrap.Arrow />
        </Button>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Future;
