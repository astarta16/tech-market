import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { MainLayout, AuthLayout } from "./layouts";

const Landing = lazy(() => import("./pages/landing/Landing"));
const Login = lazy(() => import("./pages/Login/Login"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
