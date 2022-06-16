import React from 'react';
import { Card, Wrap } from './style';

const Courses = () => {
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Title>
          IOS <span> Dasturlash </span>
        </Wrap.Title>
        <Wrap.Desc>
          Online kurslarimiz yordamida siz tanlagan yo’nalishingiz bo‘yicha
          boshlang’ich bilimlarni egallaysiz, portfolio yaratish bo’yicha
          kerakli ko’nikmalarga ham ega bo’lasiz!
        </Wrap.Desc>
        <Card.Wrap>
          <Card>
            <Card.Info>
              <Card.Title>Kurs turi</Card.Title>
              <Card.Name>Onlayn</Card.Name>
              <Card.Descript>
                Online kurslarimiz yordamida siz tanlagan yo’nalishingiz va
                portfolio yaratish bo’yicha boshlang’ich bilimlarni egallaysiz
              </Card.Descript>
            </Card.Info>
            <Wrap.Number>01</Wrap.Number>
          </Card>
          <Card>
            <Card.Info>
              <Card.Title>Kurs turi</Card.Title>
              <Card.Name>Onlayn</Card.Name>
              <Card.Descript>
                Online kurslarimiz yordamida siz tanlagan yo’nalishingiz va
                portfolio yaratish bo’yicha boshlang’ich bilimlarni egallaysiz
              </Card.Descript>
            </Card.Info>
            <Wrap.Number>02</Wrap.Number>
          </Card>
          <Card>
            <Card.Info>
              <Card.Title>Kurs turi</Card.Title>
              <Card.Name>Onlayn</Card.Name>
              <Card.Descript>
                Online kurslarimiz yordamida siz tanlagan yo’nalishingiz va
                portfolio yaratish bo’yicha boshlang’ich bilimlarni egallaysiz
              </Card.Descript>
            </Card.Info>
            <Wrap.Number>03</Wrap.Number>
          </Card>
          <Card>
            <Card.Info>
              <Card.Title>Kurs turi</Card.Title>
              <Card.Name>Onlayn</Card.Name>
              <Card.Descript>
                Online kurslarimiz yordamida siz tanlagan yo’nalishingiz va
                portfolio yaratish bo’yicha boshlang’ich bilimlarni egallaysiz
              </Card.Descript>
            </Card.Info>
            <Wrap.Number>04</Wrap.Number>
          </Card>
        </Card.Wrap>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Courses;
