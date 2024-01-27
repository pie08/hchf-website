import { Link } from "react-router-dom";
import styles from "../../sass/layout/Footer.module.scss";
import Logo from "../ui/Logo";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={`container ${styles["grid--footer"]}`}>
        <Logo className={styles["footer__logo"]} />

        <nav>
          <ul className={styles["footer__list"]}>
            <li>
              <p className={styles["footer__heading"]}>Contact</p>
            </li>
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
          <ul className={styles["footer__list"]}>
            <li>
              <p className={styles["footer__heading"]}>Resources</p>
            </li>
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
