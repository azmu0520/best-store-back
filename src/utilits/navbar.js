import Course from '../components/Course';
import Generic from '../components/Generic';
import Home from '../components/Home';
import Contact from '../components/Home/Contact';
import Team from '../components/Team';

export const data = [
  {
    id: 1,
    title: 'Asosiy',
    path: '/main',
    Component: Home,
  },
  {
    id: 2,
    title: 'Kurslarimiz',
    path: '/courses',
    Component: Course,
  },
  {
    id: 3,
    title: 'Blog',
    path: '/blog',
    Component: Generic,
  },
  {
    id: 4,
    title: 'Biz haqimizda',
    path: '/about',
    Component: Generic,
  },
  {
    id: 5,
    title: 'Jamoa',
    path: '/team',
    Component: Team,
  },
  {
    id: 6,
    title: 'Bog’lanish',
    path: '/contact',
    Component: Contact,
  },
];
