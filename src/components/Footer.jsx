import { Link } from "react-router-dom";
import styles from "../sass/layout/Footer.module.scss";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={`container ${styles["grid--footer"]}`}>
        <Logo className={styles["footer__logo"]} />

        <nav>
          <p className={styles["footer__heading"]}>Contact</p>
          <ul className={styles["footer__list"]}>
            <li>
              <a className={styles["footer__link"]} href="tel:603-953-3807">
                (603) 953-3807
              </a>
            </li>
            <li>
              <a
                className={styles["footer__link"]}
                href="mailto:abietrained@yahoo.com"
              >
                abietrained@yahoo.com
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <p className={styles["footer__heading"]}>Resources</p>
          <ul className={styles["footer__list"]}>
            <li>
              <Link to="/privacy" className={styles["footer__link"]}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
