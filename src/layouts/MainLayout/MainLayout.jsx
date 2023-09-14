import { Outlet } from 'react-router-dom';

import { Header, Footer } from './components';

export function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
