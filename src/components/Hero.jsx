import Button from "./Button";
import ClientVideo from "./ClientVideo";
import styles from "../sass/components/Hero.module.scss";

function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div
        className={`${styles.containerHero} grid grid--2-cols grid--align-v`}
      >
        <div className={styles.hero__text}>
          <h1 className="heading heading--primary">
            individualized fitness for adults 50+ years old
          </h1>

          <p className={styles.hero__description}>
            providing adults age 50+ <br />
            <span className={styles.hero__emphasize}>comprehensive, </span>
            <span className={styles.hero__emphasize}>effective, </span> and
            <span className={styles.hero__emphasize}> safe </span> <br />
            exercise programs & post-surgical training programs.
          </p>

          <Button className="btn--main margin-bottom-sm">Contact me</Button>
        </div>

        <div className={`${styles.hero__videoWrapper} flex`}>
          <ClientVideo className={styles.hero__video} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
