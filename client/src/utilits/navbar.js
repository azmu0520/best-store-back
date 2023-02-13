import Generic from '../components/Generic';

export const data = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    Component: Generic,
    private: true,
  },
  {
    id: 2,
    title: 'Login',
    path: 'auth/login',
    Component: Generic,
    private: true,
  },
  {
    id: 3,
    title: 'Register',
    path: 'auth/register',
    Component: Generic,
    private: true,
  },
  {
    id: 4,
    title: 'My Drive',
    path: 'drive',
    Component: Generic,
  },
  {
    id: 5,
    title: 'Upload',
    path: 'upload',
    Component: Generic,
  },
  {
    id: 6,
    title: 'Account Settings',
    path: 'account/settings',
    Component: Generic,
  },
];
