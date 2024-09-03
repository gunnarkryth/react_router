import { NavLink } from "react-router-dom";

import s from "./Style.module.scss";

export const Navbar = () => {
  return (
    <nav className={s.Navbar}>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "white" }
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "white" }
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/concepts"}
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "white" }
            }
          >
            Concepts
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "white" }
            }
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
