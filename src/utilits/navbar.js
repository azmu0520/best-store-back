import Blog from '../components/Blog';
import Course from '../components/Course';
import Home from '../components/Home';
import Contact from '../components/Contact';
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
    title: 'Jamoa',
    path: '/team',
    Component: Team,
  },
  {
    id: 4,
    title: 'Blog',
    path: '/blog',
    Component: Blog,
  },

  {
    id: 5,
    title: "Bog'lanish",
    path: '/contact',
    Component: Contact,
    hidden: true,
 
  },
];
