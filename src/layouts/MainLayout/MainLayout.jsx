import { Outlet } from "react-router-dom";

import { Header, Footer } from "./components";

export function MainLayout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
