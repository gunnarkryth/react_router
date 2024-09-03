import s from "./Style.module.scss";

import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export const MainLayout = () => {
  return (
    <div className={s.MainLayout}>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
