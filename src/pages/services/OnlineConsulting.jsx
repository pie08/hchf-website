import { usePageTitle } from "../../hooks/usePageTitle";
import { useResetScroll } from "../../hooks/useResetScroll";
import PageHeader from "../../components/PageHeader";
import styles from "../../sass/pages/services/ServicesStyles.module.scss";

function PostSurgical() {
  usePageTitle("Services | Online Consulting");
  useResetScroll();

  return (
    <>
      <PageHeader title="Online Consulting" />

      <section className="section">
        <div className="container grid grid--3-cols grid--row-gap-bg">
          <div className={styles["text"]}>
            <h3 className="heading heading--tertiary margin-bottom-sm-md">
              Some great header
            </h3>
            <p className="margin-bottom-md">
              Developing Individual Relationships via technology with the same
              degree of care and dedication to the improvement of your health as
              the clients I meet with personally. Taking the multiple components
              of training (Strength, Mobility, Preventative Maintenance,
              Flexibility, Conditioning, Stability), speaking to you
              individually, and helping to determine and design an exercise
              program you understand (the purpose behind what you are doing) and
              can implement to address your needs.
            </p>
          </div>
          <img
            className={styles["image"]}
            src="/assets/images/beach-bg-1x.webp"
            alt=""
          />

          <img
            className={styles["image"]}
            src="/assets/images/beach-bg-1x.webp"
            alt=""
          />
          <div className={styles["text"]}>
            <h3 className="heading heading--tertiary margin-bottom-sm-md">
              Some great header
            </h3>
            <p className="margin-bottom-md">
              Developing Individual Relationships via technology with the same
              degree of care and dedication to the improvement of your health as
              the clients I meet with personally. Taking the multiple components
              of training (Strength, Mobility, Preventative Maintenance,
              Flexibility, Conditioning, Stability), speaking to you
              individually, and helping to determine and design an exercise
              program you understand (the purpose behind what you are doing) and
              can implement to address your needs.
            </p>
          </div>

          <button className={`${styles["btn"]} btn btn--cta`}>
            Contact me
          </button>
        </div>
      </section>
    </>
  );
}

export default PostSurgical;
