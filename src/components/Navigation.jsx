import Button from "./Button";
import styles from "../sass/layout/Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Navigation({ onOpenModal }) {
  const [showServices, setShowServices] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef();

  // state for mobile nav
  const [isOpen, setIsOpen] = useState(false);

  useEffect(function () {
    window.addEventListener("scroll", () =>
      window.pageYOffset !== 0 ? setIsSticky(true) : setIsSticky(false)
    );
  }, []);

  return (
    <header
      className={`${isSticky ? "sticky" : ""} ${isOpen ? "open" : ""}`}
      ref={headerRef}
    >
      <div className={styles["sticky-bg"]}></div>

      <NavLink to="/" className={styles.navigation__logoWrapper}>
        <img
          src="assets/images/logos/HCHF-logo-black.png"
          className={styles.navLogo}
          alt="Half century health and fitness logo"
        />
      </NavLink>

      <nav className={`${styles.navigation}`}>
        <ul className={styles.navigation__list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li
            className={styles["dropdown-parent"]}
            onMouseOver={() => setShowServices(true)}
            onMouseOut={() => setShowServices(false)}
          >
            <a>
              <button>Services</button>
              <span className={showServices ? "rotate-180" : ""}>
                <ChevronDownIcon className={styles["navigation__icon"]} />
              </span>
            </a>

            <div
              className={`${styles["dropdown-wrapper"]} ${
                showServices ? "" : styles["dropdown-hidden"]
              }`}
            >
              <div className={styles["dropdown"]}>
                <ul>
                  <li>
                    <NavLink to="services/adult-training">
                      Adult Training
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="services/post-surgical">
                      Post-Surgical Training
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="services/baseball-softball">
                      Baseball/Softball
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="services/online-consulting">
                      Online Consulting
                    </NavLink>
                  </li>
                </ul>
              </div>
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
            <Button onClick={onOpenModal}>Contact me</Button>
          </li>
        </ul>
      </nav>
      <button
        className={styles["navigation__mobile-btn"]}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>&nbsp;</span>
      </button>
    </header>
  );
}
