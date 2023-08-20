import styles from "../../sass/pages/home/Cta.module.scss";
import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";

function Cta({ onOpenModal }) {
  return (
    <section className={styles["section--cta"]}>
      <div className="container">
        <div className={styles["cta"]}>
          <div className={styles["cta__content"]}>
            <h2
              className={`${styles["cta__heading"]} heading heading--secondary margin-bottom-sm-md`}
            >
              free personal consultation
            </h2>
            <p className={`${styles["cta__description"]} margin-bottom-md`}>
              Contact me for a free consultation and the opportunity to discuss
              your personal situation in detail.
            </p>
            <Button type="primary" onClick={onOpenModal}>
              Contact me
            </Button>
          </div>
          <Logo className={styles["cta__img"]} />
        </div>
      </div>
    </section>
  );
}

export default Cta;
