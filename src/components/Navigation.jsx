import Button from "./Button";
import styles from "../sass/layout/Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Navigation() {
  const navRef = useRef();

  // Navigation fade on hover animation
  function handleNavHover(e, opacity) {
    if (e.target.nodeName !== "A" && e.target.nodeName !== "BUTTON") return;

    const link = e.target.closest("li");
    const siblings = e.target.closest("ul").querySelectorAll("li");
    const logo = navRef.current.querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }

  useEffect(
    function () {
      navRef.current.addEventListener("mouseover", (e) =>
        handleNavHover(e, 0.5)
      );
      navRef.current.addEventListener("mouseout", (e) => handleNavHover(e, 1));
    },
    [navRef]
  );

  return (
    <header>
      <nav className={styles.navigation} ref={navRef}>
        <NavLink to="/" className={styles.navigation__logoWrapper}>
          <img
            src="assets/images/logos/HCHF-logo-black.png"
            className={styles.navLogo}
            alt="Half century health and fitness logo"
          />
        </NavLink>

        <ul className={styles.navigation__list}>
          <li>
            <NavLink to="/">Home</NavLink>
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
