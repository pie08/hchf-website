import Button from "./Button";
import styles from "../sass/layout/Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Navigation({ onOpenModal }) {
  const [isSticky, setIsSticky] = useState(false);

  // state for mobile nav
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(function () {
    window.addEventListener("scroll", () =>
      window.pageYOffset !== 0 ? setIsSticky(true) : setIsSticky(false)
    );
  }, []);

  return (
    <header
      className={`${isSticky ? "sticky" : ""} ${isMobileNavOpen ? "open" : ""}`}
    >
      <div className={styles["sticky-bg"]}></div>

      <NavLink to="/" className={styles.navigation__logoWrapper}>
        <img
          src="assets/images/logos/HCHF-logo-black.png"
          className={styles.navigation__logo}
          alt="Half century health and fitness logo"
        />
      </NavLink>

      <nav className={`${styles.navigation}`}>
        <ul className={styles.navigation__list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <DropdownMenu show={showServices} setShow={setShowServices} />

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
        className={styles["mobile-btn"]}
        onClick={() => setIsMobileNavOpen((open) => !open)}
      >
        <span>&nbsp;</span>
      </button>
    </header>
  );
}

function DropdownMenu({ show, setShow }) {
  return (
    <li
      className={styles["dropdown-parent"]}
      onClick={() => setShow((show) => !show)}
    >
      <a>
        Services
        <span>
          <ChevronDownIcon className={styles["navigation__icon"]} />
        </span>
      </a>

      {/* ${showServices ? "" : styles["dropdown-hidden"]} */}
      <div className={`${styles["dropdown-wrapper"]} `}>
        <ul className={`${styles["dropdown"]} ${show ? styles["active"] : ""}`}>
          <li>
            <NavLink to="services/adult-training">Adult Training</NavLink>
          </li>
          <li>
            <NavLink to="services/post-surgical">
              Post-Surgical Training
            </NavLink>
          </li>
          <li>
            <NavLink to="services/baseball-softball">Baseball/Softball</NavLink>
          </li>
          <li>
            <NavLink to="services/online-consulting">Online Consulting</NavLink>
          </li>
        </ul>
      </div>
    </li>
  );
}
