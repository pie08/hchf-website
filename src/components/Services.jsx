import Slider from "./Slider";
import styles from "../sass/components/Services.module.scss";
import adultTrainingSliderImages from "../data/adultTrainingSliderImages.json";
import postSurgicalSliderImages from "../data/postSurgicalSliderImages.json";
import baseballSliderImages from "../data/baseballSliderImages.json";

function Services() {
  return (
    <section className="section">
      <div className="container margin-bottom-bg center-text">
        <h4 className="heading heading--sub margin-bottom-sm">Services</h4>

        <div className={styles.services__headingWrapper}>
          <h2 className="heading heading--secondary">Allow me to provide</h2>
          <p className="heading heading--subtext">
            structure - organization - purpose - guidance
          </p>
        </div>

        <div className={styles.services__headingWrapper}>
          <h2 className="heading heading--secondary">Rely on me to provide</h2>
          <p className="heading heading--subtext">
            diversity - thoroughness - effectiveness
          </p>
        </div>
      </div>

      <div className={`container ${styles.servicesGrid}`}>
        {/* <!-- STEP 1 --> */}
        <Slider contentArr={adultTrainingSliderImages} sliderType="image" />

        <div className={styles["step__content-text"]}>
          <h3 className="heading heading--tertiary margin-bottom-sm-md">
            Adult training
          </h3>

          <p className={styles.step__description}>
            Providing a Trustworthy, Knowledgeable, Structured Training Approach
            for Adults over 50. From the Functional Aspects of Improving
            Stability, Increasing Strength, & Improving Mobility, to the more
            Cosmetic Aspects of Increasing Muscle Mass or Losing Weight, I will
            Design & Implement an Effective Program (continuously reinforcing
            proper set-up and execution of each exercise with explanation of
            purpose for each exercise) to help you reach your desired results.
          </p>
        </div>

        {/* <!-- STEP 2 --> */}
        <div className={styles["step__content-text"]}>
          <h3 className="heading heading--tertiary margin-bottom-sm-md">
            Post-surgical training
          </h3>
          <p className={styles.step__description}>
            After Completing Post-Surgical Physical Therapy, many people
            continue to experience; Discomfort, Limited Range of Motion, Lack of
            Strength, and Lack of Stability in the surgically repaired area.
            They are also uncertain how to effectively continue the recovery
            process. I will Effectively Guide You by addressing the limitations
            in the surgically repaired area while implementing timely
            progressions to Strengthen, Stabilize, and Mobilize not only the
            repaired area but your entire body as well.
          </p>
        </div>

        <Slider contentArr={postSurgicalSliderImages} sliderType="image" />

        {/* <!-- STEP 3 --> */}
        <Slider contentArr={baseballSliderImages} sliderType="image" />

        <div className={styles["step__content-text"]}>
          <h3 className="heading heading--tertiary margin-bottom-sm-md">
            Baseball & Softball
          </h3>
          <p className={styles.step__description}>
            Improving Overall Strength & Stability for a High School Athlete
            will result in Significant Improvements In Performance and should
            not be overlooked or undervalued. I Design & Implement Training
            Programs that produce a More Explosive/Dynamic Ballplayer.
          </p>
        </div>

        {/* <!-- STEP 4 --> */}

        <div className={styles["step__content-text"]}>
          <h3 className="heading heading--tertiary margin-bottom-sm-md">
            Online consulting
          </h3>
          <p className={styles.step__description}>
            Developing Individual Relationships via technology with the same
            degree of care and dedication to the improvement of your health as
            the clients I meet with personally. Taking the multiple components
            of training (Strength, Mobility, Preventative Maintenance,
            Flexibility, Conditioning, Stability), speaking to you individually,
            and helping to determine and design an exercise program you
            understand (the purpose behind what you are doing) and can implement
            to address your needs.
          </p>
        </div>

        <img
          src="/assets/images/logos/HCHF-logo-black.png"
          alt="Half century health and fitness logo black"
          className={styles.consultingLogo}
        />
      </div>
    </section>
  );
}

export default Services;
