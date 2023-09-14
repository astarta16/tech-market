import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './layouts';

const Home = lazy(() => import('./pages/Home/Home'));
const Aboutus = lazy(() => import('./pages/Aboutus/Aboutus'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
