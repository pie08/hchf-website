import styles from "../sass/components/Modal.module.scss";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Modal({ isOpen, onClose }) {
  return (
    <>
      <div className={`${styles["modal"]} ${isOpen ? "" : styles["hidden"]}`}>
        <img
          src="/assets/images/logos/HCHF-logo-silver.png"
          className={styles["modal__logo"]}
          alt="Half century health and fitness logo"
        />
        <div className={styles["modal__content"]}>
          <h2
            className={`${styles["modal__heading"]} heading heading--secondary`}
          >
            Contact Information
          </h2>
          <p className={styles["modal__description"]}>
            To contact me, please send an email or please call.
          </p>
          <div className={styles["modal__info-wrapper"]}>
            <a className="btn btn--contact" href="tel:603-953-3807">
              (603) 953-3807
            </a>
            <a className="btn btn--contact" href="mailto:abietrained@yahoo.com">
              abietrained@yahoo.com
            </a>
          </div>
        </div>

        <button className={styles["modal__btn-close"]} onClick={onClose}>
          <XMarkIcon className={styles["modal__icon"]} />
        </button>
      </div>
      <div
        className={`${styles["overlay"]} ${isOpen ? "" : styles["hidden"]}`}
        onClick={onClose}
      ></div>
    </>
  );
}

export default Modal;
