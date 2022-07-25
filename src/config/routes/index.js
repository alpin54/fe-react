import { Home, About, Testimonials } from 'container/pages';

const AppRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/testimonials',
    element: <Testimonials />
  }
];

export default AppRoutes;
