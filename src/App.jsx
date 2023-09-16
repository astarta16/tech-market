import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Landing = lazy(() => import("../src/pages/Landing"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Suspense>
  );
}

export default App;
