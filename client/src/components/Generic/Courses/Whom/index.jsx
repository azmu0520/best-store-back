import React from 'react';
import { Ad, Card, Wrap } from './style';
import laptop from '../../../../assets/imgs/laptop.png';

const Whom = () => {
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Title className='header'>
          Kurslarimiz <span> kimlar uchun?</span>
        </Wrap.Title>
        <Wrap.Desc className='text'>
          Quyida bizning ustun jihatlarimiz bilan tanishing
        </Wrap.Desc>
        <Wrap.Body>
          <Wrap.Img>
            <Wrap.PalyWrap>
              <Wrap.Play />
            </Wrap.PalyWrap>
          </Wrap.Img>
          <Card>
            <Card.Wrap>
              <Card.IconWrap>
                <Card.Icon src={laptop} />
              </Card.IconWrap>
              <Card.Text>
                <Card.Title>0 dan boshlamoqchi bo’lganlarga</Card.Title>
                <Card.Desc>
                  Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan
                  har qanday inson dasturlah saboqlarini o’rganishi mumkin
                </Card.Desc>
              </Card.Text>
            </Card.Wrap>
            <Card.Wrap>
              <Card.IconWrap>
                <Card.Icon src={laptop} />
              </Card.IconWrap>
              <Card.Text>
                <Card.Title>0 dan boshlamoqchi bo’lganlarga</Card.Title>
                <Card.Desc>
                  Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan
                  har qanday inson dasturlah saboqlarini o’rganishi mumkin
                </Card.Desc>
              </Card.Text>
            </Card.Wrap>
            <Card.Wrap>
              <Card.IconWrap>
                <Card.Icon src={laptop} />
              </Card.IconWrap>
              <Card.Text>
                <Card.Title>0 dan boshlamoqchi bo’lganlarga</Card.Title>
                <Card.Desc>
                  Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan
                  har qanday inson dasturlah saboqlarini o’rganishi mumkin
                </Card.Desc>
              </Card.Text>
            </Card.Wrap>
          </Card>
        </Wrap.Body>
        <Wrap.Title className='header'>
          Kursda nimalarni <span> o‘rganasiz? </span>
        </Wrap.Title>
        <Wrap.Desc className='text'>
          Quyida bizning ustun jihatlarimiz bilan tanishing
        </Wrap.Desc>
        <Ad>
          <Ad.Card>
            <Ad.Icon />
            <Ad.Text>
              Har bir kursdagi mavzulashtirilgan video darslarda real
              loyihalardan qismlar orqali tushuntirib beriladi.
            </Ad.Text>
          </Ad.Card>
          <Ad.Card>
            <Ad.Icon />
            <Ad.Text>
              Har bir kursdagi mavzulashtirilgan video darslarda real
              loyihalardan qismlar orqali tushuntirib beriladi.
            </Ad.Text>
          </Ad.Card>
          <Ad.Card>
            <Ad.Icon />
            <Ad.Text>
              Har bir kursdagi mavzulashtirilgan video darslarda real
              loyihalardan qismlar orqali tushuntirib beriladi.
            </Ad.Text>
          </Ad.Card>
          <Ad.Card>
            <Ad.Icon />
            <Ad.Text>
              Har bir kursdagi mavzulashtirilgan video darslarda real
              loyihalardan qismlar orqali tushuntirib beriladi.
            </Ad.Text>
          </Ad.Card>
          <Ad.Card>
            <Ad.Icon />
            <Ad.Text>
              Har bir kursdagi mavzulashtirilgan video darslarda real
              loyihalardan qismlar orqali tushuntirib beriladi.
            </Ad.Text>
          </Ad.Card>
          <Ad.Card>
            <Ad.Icon />
            <Ad.Text>
              Har bir kursdagi mavzulashtirilgan video darslarda real
              loyihalardan qismlar orqali tushuntirib beriladi.
            </Ad.Text>
          </Ad.Card>
          <Ad.Card>
            <Ad.Icon />
            <Ad.Text>
              Har bir kursdagi mavzulashtirilgan video darslarda real
              loyihalardan qismlar orqali tushuntirib beriladi.
            </Ad.Text>
          </Ad.Card>
          <Ad.Card>
            <Ad.Icon />
            <Ad.Text>
              Har bir kursdagi mavzulashtirilgan video darslarda real
              loyihalardan qismlar orqali tushuntirib beriladi.
            </Ad.Text>
          </Ad.Card>
          <Ad.Card>
            <Ad.Icon />
            <Ad.Text>
              Har bir kursdagi mavzulashtirilgan video darslarda real
              loyihalardan qismlar orqali tushuntirib beriladi.
            </Ad.Text>
          </Ad.Card>
        </Ad>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Whom;
