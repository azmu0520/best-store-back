import Teams from '../components/Team';
import Contact from '../components/Contact';
import Courses from '../components/Courses';
import Dashboard from '../components/Dashboard';

export const Routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    title: 'Dashboard',
    hidden: false,
    child: [],
  },
  {
    path: '/teams',
    component: Teams,
    title: 'Teams',
    hidden: false,
    child: [],
  },
  {
    path: '/courses',
    component: Courses,
    title: 'Courses',
    hidden: false,
    child: [],
  },
  {
    path: '/contact',
    component: Contact,
    title: 'Contact',
    hidden: false,
    child: [],
  },
];
