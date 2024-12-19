import { NavLink } from "react-router-dom";
import styles from "../components/AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/fretboard-simulator">Fretboard Simulator</NavLink>
        </li>
        <li>
          <NavLink to="/">Ear Trainer</NavLink>
        </li>
        <li>
          <NavLink to="/metronome">Metronome</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
