import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Banner } from './Components';

import MainLayout from './layouts/MainLayout/mainLayout';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Banner />} />
          <Route path='/about-us' element={<div>about us</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
