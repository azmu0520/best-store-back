import React from 'react';
import { Wrap } from './style';

const Courses = () => {
  let count = [1, 2, 3, 4, 5, 6];
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Text>
          Bizning <span>kurslarimiz</span>
        </Wrap.Text>
        <Wrap.Descript>
          Online kurslarimiz yordamida siz tanlagan yo’nalishingiz bo‘yicha
          boshlang’ich bilimlarni egallaysiz, portfolio yaratish bo’yicha
          kerakli ko’nikmalarga ham ega bo’lasiz!
        </Wrap.Descript>
        <Wrap.Cards>
          {count.map((item) => (
            <Wrap.Card>
              <Wrap.Icons>
                <Wrap.VsCode /> <Wrap.Top>TOP</Wrap.Top>
              </Wrap.Icons>
              <Wrap.CardTitle>IOS Dasturlash</Wrap.CardTitle>
              <Wrap.Mentor>
                <span>User Userov</span> <a href='/'>Batafsil</a>
              </Wrap.Mentor>
            </Wrap.Card>
          ))}
        </Wrap.Cards>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Courses;
