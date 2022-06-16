import React from 'react';
import { NavLink } from 'react-router-dom';
import { courseData } from '../../../mock/course';
import { Wrap } from './style';

const Courses = () => {
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Header className='header'>
          Bizning <span className='span'>kurslarimiz</span>
        </Wrap.Header>
        <Wrap.Text className='text'>
          Online kurslarimiz yordamida siz tanlagan yo’nalishingiz bo‘yicha
          boshlang’ich bilimlarni egallaysiz, portfolio yaratish bo’yicha
          kerakli ko’nikmalarga ham ega bo’lasiz!
        </Wrap.Text>
        <Wrap.Cards>
          {courseData.map((value) => (
            <NavLink key={value.id} to={`/courses/${value.id}`}>
              <Wrap.Card>
                <Wrap.Icons>
                  <value.url className='icons' />{' '}
                  <Wrap.Top>{value.type}</Wrap.Top>
                </Wrap.Icons>
                <Wrap.CardTitle>{value.language}</Wrap.CardTitle>
                <Wrap.Mentor>
                  <span>{value.mentor}</span> <a href='/'>Batafsil</a>
                </Wrap.Mentor>
              </Wrap.Card>
            </NavLink>
          ))}
        </Wrap.Cards>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Courses;
