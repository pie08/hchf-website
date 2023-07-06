import styles from "../sass/components/Cta.module.scss";
import Button from "./Button";

function Cta({ onOpenModal }) {
  return (
    <section className={styles["section--cta"]}>
      <div className="container">
        <div className={styles["cta"]}>
          <div className={styles["cta__content"]}>
            <h2
              className={`${styles["cta__heading"]} heading heading--secondary`}
            >
              free personal consultation
            </h2>
            <p className={styles["cta__description"]}>
              Contact me for a free consultation and the opportunity to discuss
              your personal situation in detail.
            </p>
            <Button onClick={onOpenModal}>Contact me</Button>
          </div>
          <img
            className={styles["cta__img"]}
            src="/assets/images/logos/HCHF-logo-black.png"
            alt="Half century health and fitness logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Cta;
