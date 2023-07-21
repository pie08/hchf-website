import Button from "./Button";
import ClientVideo from "./ClientVideo";
import styles from "../sass/components/Hero.module.scss";

function Hero({ onOpenModal }) {
  return (
    <section className={styles["section--hero"]} id="hero">
      <div
        className={`${styles["hero-wrapper"]} grid grid--2-cols grid--align-v`}
      >
        <div className={styles.hero__text}>
          <h1 className="heading heading--primary margin-bottom-sm-md">
            individualized fitness for adults 50+ years old
          </h1>

          <p className={styles.hero__description}>
            providing adults age 50+ <br />
            <span className={styles.hero__emphasize}>comprehensive, </span>
            <span className={styles.hero__emphasize}>effective, </span> and
            <span className={styles.hero__emphasize}> safe </span> <br />
            exercise programs & post-surgical training programs.
          </p>

          <Button className="btn--cta margin-bottom-sm" onClick={onOpenModal}>
            Contact me
          </Button>
        </div>

        <div className={`${styles.hero__videoWrapper} flex`}>
          <ClientVideo className={styles["hero__video"]} videoId="4g32ep11oz" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
