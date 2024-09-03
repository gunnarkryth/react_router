import "./assets/styles/App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "./layout/MainLayout.jsx";

import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Concepts } from "./pages/Concepts.jsx";
import { Contact } from "./pages/Contact.jsx";
import { NoPage } from "./pages/NoPage.jsx";

function App() {
  return (
    <BrowserRouter>
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

export default App;
