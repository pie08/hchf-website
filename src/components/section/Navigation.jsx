import Button from "../ui/Button";
import styles from "../../sass/layout/Navigation.module.scss";
import { Link, NavLink } from "react-router-dom";
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
          src="/assets/images/logos/1x/HCHF-logo-black.webp"
          className={styles.navigation__logo}
          alt="Half century health and fitness logo"
        />
      </NavLink>

      <nav className={`${styles.navigation}`}>
        <ul className={styles.navigation__list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <DropdownMenu
            text="Services"
            show={showServices}
            setShow={setShowServices}
          >
            <Link to="services/adult-training">Adult Training</Link>
            <Link to="services/post-surgical-training">
              Post-Surgical Training
            </Link>
            <Link to="services/baseball-softball-training">
              Baseball/Softball
            </Link>
            <Link to="services/online-consulting">Online Consulting</Link>
          </DropdownMenu>

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
            <Button onClick={onOpenModal} type="primary">
              Contact me
            </Button>
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

function DropdownMenu({ children, text, show, setShow }) {
  return (
    <li className={styles["dropdown-parent"]}>
      <a onClick={() => setShow((show) => !show)}>
        {text}
        <span>
          <ChevronDownIcon className={styles["navigation__icon"]} />
        </span>
      </a>

      <div className={`${styles["dropdown-wrapper"]} `}>
        <ul className={`${styles["dropdown"]} ${show ? styles["active"] : ""}`}>
          {children.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
