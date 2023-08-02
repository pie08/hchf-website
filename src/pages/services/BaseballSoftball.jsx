import { usePageTitle } from "../../hooks/usePageTitle";
import { useResetScroll } from "../../hooks/useResetScroll";
import PageHeader from "../../components/PageHeader";
import styles from "../../sass/pages/services/ServicesStyles.module.scss";

function PostSurgical() {
  usePageTitle("Services | Baseball / Softball Training");
  useResetScroll();

  return (
    <>
      <PageHeader title="Baseball / Softball Training" />

      <section className="section">
        <div className={`container ${styles["grid"]}`}>
          <div className={styles["text"]}>
            <h3 className="heading heading--tertiary margin-bottom-sm-md">
              Some great header
            </h3>
            <p className="margin-bottom-md">
              Improving Overall Strength & Stability for a High School Athlete
              will result in Significant Improvements In Performance and should
              not be overlooked or undervalued. I Design & Implement Training
              Programs that produce a More Explosive/Dynamic Ballplayer.
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
              Improving Overall Strength & Stability for a High School Athlete
              will result in Significant Improvements In Performance and should
              not be overlooked or undervalued. I Design & Implement Training
              Programs that produce a More Explosive/Dynamic Ballplayer.
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
