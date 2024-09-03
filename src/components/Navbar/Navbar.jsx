import { NavLink } from "react-router-dom";

import s from "./Style.module.scss";

export const Navbar = () => {
  return (
    <nav className={s.Navbar}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : "")}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/concepts"}
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            Concepts
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
