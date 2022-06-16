import React from 'react';
import { Card, Full, Wrap } from './style';
import { Progress } from 'antd';
import img from '../../../assets/imgs/avatar.png';
const Mentor = () => {
  let user = {
    id: 0,
    url: img,
    fullname: 'Sardorbek Muhtorov',
    job: 'Frontend developer',
    descr: `
        Eric was always fascinated by tecnology. He studied computing at an early age. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra lectus laoreet in in pretium non. 

       Eu gravida volutpat quisque viverra arcu sed. Morbi libero orci velit eu quis pretium. Quisque habitant tortor velit cursus tristique. 

       Eric was always fascinated by tecnology. He studied computing at an early age. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra lectus laoreet in in pretium non. Morbi libero orci velit eu quis pretium. Quisque habitant tortor velit cursus tristique.  
        `,
    wbaDescription:
      'Eric was always fascinated by tecnology. He studied computing at an early age and started his tecnology consulting business in college. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra lectus laoreet in in pretium non.',
    phone: '(99) 108 24 66',
    email: 'bilan6436@gmail.com',
    location: 'Toshkent sh, Yunusobod 13-daha, 61-uy',
    link: {
      github: 'https//',
      instagram: 'https//',
      telegram: 'https//',
      linkedIN: 'https//',
    },
    skills: [
      { name: 'Phyton', level: '75' },
      { name: 'Phyton', level: '65' },
      { name: 'Phyton', level: '55' },
      { name: 'Phyton', level: '45' },
      { name: 'Phyton', level: '35' },
    ],
  };
  return (
    <Wrap>
      <Wrap.Wrap>
        <Wrap.Title>
          Jamoa a’zolari <span> haqida batafsil </span>
        </Wrap.Title>
        <Wrap.Desc>
          A collection of websites and projects built with Webbrain UI
        </Wrap.Desc>
        <Card>
          <Wrap.Img src={img} />
          <Wrap.About>
            <Card.Title>{user.fullname}</Card.Title>
            <Card.Desc job='true'>{user.job}</Card.Desc>
            <Card.Desc>{user.wbaDescription}</Card.Desc>
            <Card.Wrap>
              <Card.Tel /> {user.phone}
            </Card.Wrap>
            <Card.Wrap>
              <Card.Msg /> {user.email}
            </Card.Wrap>
            <Card.Wrap last='true'>
              <Card.Location /> {user.location}
            </Card.Wrap>
            <Card.Wrap>
              <Card.Insta />
              <Card.Facebook />
              <Card.Telegram />
              <Card.Youtube />
            </Card.Wrap>
          </Wrap.About>
        </Card>
        <Full>
          <Full.Descript>
            <Full.Title>Tarjimayi hol</Full.Title>
            <Full.Text>
              Eric was always fascinated by tecnology. He studied computing at
              an early age. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Viverra lectus laoreet in in pretium non. <br /> <br /> Eu
              gravida volutpat quisque viverra arcu sed. Morbi libero orci velit
              eu quis pretium. Quisque habitant tortor velit cursus tristique.
              <br /> <br />
              Eric was always fascinated by tecnology. He studied computing at
              an early age. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Viverra lectus laoreet in in pretium non. Morbi libero orci
              velit eu quis pretium. Quisque habitant tortor velit cursus
              tristique.
            </Full.Text>
          </Full.Descript>
          <Full.Descript>
            <Full.Title>Qobiliyatlar</Full.Title>
            <Full.Text>
              Eric was always fascinated by tecnology. He studied computing at
              an early age.
            </Full.Text>
            {user.skills.map((item) => (
              <Full.SkilWrap>
                <Full.SkillTitle>{item.name}</Full.SkillTitle>
                <Progress percent={item.level} />
              </Full.SkilWrap>
            ))}
          </Full.Descript>
        </Full>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Mentor;
