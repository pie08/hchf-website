import Button from "./Button";
import styles from "../sass/layout/Navigation.module.scss";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header className={styles.navigation}>
      <NavLink to="/home" className={styles.navigation__logoWrapper}>
        <img
          src="assets/images/logos/HCHF-logo-black.png"
          className={styles.navLogo}
          alt="Half century health and fitness logo"
        />
      </NavLink>

      <nav>
        <ul className={styles.navigation__list}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>

          <li>
            <div className={styles.navigation__services}>
              <button>Services</button>
              {/* <div className="services__content">
          <a href="#">Adult Training</a>
          <a href="#">Post-Surgical Training</a>
          <a href="#">Baseball/Softball</a>
          <a href="#">Online Consulting</a>
        </div> */}
            </div>
          </li>

          <li>
            <NavLink to="/aging">Aging & Hormones</NavLink>
          </li>
          <li>
            <NavLink to="/profiles">Client Profiles</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials">Testimonials</NavLink>
          </li>

          <li>
            <Button>Contact me</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
