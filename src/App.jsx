import "./assets/styles/App.scss";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { MainLayout } from "./layout/MainLayout.jsx";

import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Concepts } from "./pages/Concepts.jsx";
import { Contact } from "./pages/Contact.jsx";
import { NoPage } from "./pages/NoPage.jsx";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/concepts"} element={<Concepts />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
          <Route path={"/*"} element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const TitleUpdater = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Lantern • Home";
        break;
      case "/about":
        document.title = "Lantern • About";
        break;
      case "/concepts":
        document.title = "Lantern • Concepts";
        break;
      case "/contact":
        document.title = "Lantern • Contact us";
        break;
      default:
        document.title = "Lantern • 404";
        break;
    }
  }, [location]);
};

export default App;
