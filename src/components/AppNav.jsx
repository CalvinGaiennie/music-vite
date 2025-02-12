import { NavLink } from "react-router-dom";
import styles from "../components/AppNav.module.css";

function AppNav() {
  return (
    <nav className="nav py-2">
      <ul className="navbar d-flex justify-content-center w-100 list-unstyled gap-2 gap-md-4 gap-lg-5">
        <li className="nav-item">
          <NavLink className="nav-link fs-5 text-dark" to="/">
            Lessons
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link fs-5 text-dark"
            to="/fretboard-simulator"
          >
            Fretboard Simulator
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5 text-dark" to="/ear-trainer">
            Ear Trainer
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5 text-dark" to="/metronome">
            Metronome
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link fs-5 text-dark" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
