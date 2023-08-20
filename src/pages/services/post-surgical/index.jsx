import { usePageTitle } from "../../../hooks/usePageTitle";
import { useResetScroll } from "../../../hooks/useResetScroll";
import PageHeader from "../../../components/section/PageHeader";
import styles from "../../../sass/pages/services/ServicesStyles.module.scss";

function PostSurgical() {
  usePageTitle("Services | Post-Surgical Training");
  useResetScroll();

  return (
    <>
      <PageHeader title="Post Surgical Training" />

      <section className="section">
        <div className={`container ${styles["grid"]}`}>
          <div className={styles["text"]}>
            <h3 className="heading heading--tertiary margin-bottom-sm-md">
              Some great header
            </h3>
            <p className="margin-bottom-md">
              After Completing Post-Surgical Physical Therapy, many people
              continue to experience; Discomfort, Limited Range of Motion, Lack
              of Strength, and Lack of Stability in the surgically repaired
              area. They are also uncertain how to effectively continue the
              recovery process. I will Effectively Guide You by addressing the
              limitations in the surgically repaired area while implementing
              timely progressions to Strengthen, Stabilize, and Mobilize not
              only the repaired area but your entire body as well.
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
              After Completing Post-Surgical Physical Therapy, many people
              continue to experience; Discomfort, Limited Range of Motion, Lack
              of Strength, and Lack of Stability in the surgically repaired
              area. They are also uncertain how to effectively continue the
              recovery process. I will Effectively Guide You by addressing the
              limitations in the surgically repaired area while implementing
              timely progressions to Strengthen, Stabilize, and Mobilize not
              only the repaired area but your entire body as well.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PostSurgical;
