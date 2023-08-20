import PageHeader from "../../../components/section/PageHeader";
import { usePageTitle } from "../../../hooks/usePageTitle";
import { useResetScroll } from "../../../hooks/useResetScroll";
import styles from "../../../sass/pages/services/ServicesStyles.module.scss";

function AdultTraining() {
  usePageTitle("Services | Adult Training");
  useResetScroll();

  return (
    <>
      <PageHeader title="Adult Training" />

      <section className="section">
        <div className={`container ${styles["grid"]}`}>
          <div className={styles["text"]}>
            <h3 className="heading heading--tertiary margin-bottom-sm-md">
              Some great header
            </h3>
            <p className="margin-bottom-md">
              Providing a Trustworthy, Knowledgeable, Structured Training
              Approach for Adults over 50. From the Functional Aspects of
              Improving Stability, Increasing Strength, & Improving Mobility, to
              the more Cosmetic Aspects of Increasing Muscle Mass or Losing
              Weight, I will Design & Implement an Effective Program
              (continuously reinforcing proper set-up and execution of each
              exercise with explanation of purpose for each exercise) to help
              you reach your desired results.
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
              Providing a Trustworthy, Knowledgeable, Structured Training
              Approach for Adults over 50. From the Functional Aspects of
              Improving Stability, Increasing Strength, & Improving Mobility, to
              the more Cosmetic Aspects of Increasing Muscle Mass or Losing
              Weight, I will Design & Implement an Effective Program
              (continuously reinforcing proper set-up and execution of each
              exercise with explanation of purpose for each exercise) to help
              you reach your desired results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdultTraining;
