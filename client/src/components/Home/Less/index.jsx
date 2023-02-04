import React from 'react';
import { Wrap, Status } from './style';
import img from '../../../assets/imgs/status.png';
import { useState } from 'react';
const Less = () => {
  let count = [1, 2, 3, 4, 5];
  const [state, setState] = useState(0);
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Header className='header'>
          Kam vaqtda <span className='span'>ko‘proq o‘rganish </span>
        </Wrap.Header>
        <Wrap.Text className='text'>
          Webbrain akademiyasida juda qisqa muddatda istalgan dasturlash
          sohasida Junior darajasiga chiqa olasiz
        </Wrap.Text>

        {/* Wrap Card */}
        <Wrap.CardWrap>
          <Wrap.Card>
            <Wrap.PlayCover>
              <Wrap.Play />
            </Wrap.PlayCover>
          </Wrap.Card>
          <Status>
            <Status.Card>
              <Status.Img src={img} />
              <Status.Plus>
                <span className='span'> PLUS</span>
                VERIFIED CAPE TOWN
              </Status.Plus>
              <Status.Title>Modern, Chic Penthouse</Status.Title>
              <Status.Price>$119/night</Status.Price>
              <Wrap.StarWrap>
                {count.map((item) => (
                  <Wrap.Star
                    key={item}
                    onClick={() => setState(item)}
                    active={(item <= state).toString()}
                  />
                ))}
                4.5 (190)
              </Wrap.StarWrap>
            </Status.Card>
          </Status>
        </Wrap.CardWrap>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Less;
