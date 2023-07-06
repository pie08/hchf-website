import { Link } from "react-router-dom";
import styles from "../sass/components/Aging.module.scss";

function Aging() {
  return (
    <section className="section">
      <div className="container">
        <p className="heading heading--sub margin-bottom-sm">
          Aging & Hormones
        </p>
        <h2 className="heading heading--secondary margin-bottom-md">
          Aging results in the reduction of anabolic hormones
        </h2>
        <h3 className="heading heading--tertiary margin-bottom-sm-md">
          Physiological changes from decreased hormone levels
        </h3>
      </div>
      <div className={`container ${styles["aging-wrapper"]}`}>
        <div className={styles["aging__list-wrapper"]}>
          <h3
            className={`${styles["aging__list-heading"]} heading heading--tertiary center-text`}
          >
            {/* <ion-icon name="arrow-up-outline"></ion-icon> */}
            Increases in
          </h3>
          <ul className={styles["aging__list"]}>
            <li>tightness/rigidity</li>
            <li>body fat</li>
            <li>body weight</li>
            <li>obesity</li>
            <li>bodily dysfunction</li>
            <li>risk of cardiovascular disease</li>
            <li>sedentary lifestyle</li>
            <li>risk of high blood pressure</li>
            <li>risk of type 2 diabetes</li>
          </ul>
        </div>

        <div className={styles["aging__list-wrapper"]}>
          <h3
            className={`${styles["aging__list-heading"]} heading heading--tertiary center-text`}
          >
            {/* <ion-icon name="arrow-down-outline"></ion-icon> */}
            Decreases in
          </h3>
          <ul className={styles["aging__list"]}>
            <li>mobility/flexibility</li>
            <li>muscle mass/muscle tone</li>
            <li>strength</li>
            <li>movement</li>
            <li>overall health</li>
            <li>quality of life</li>
            <li>bone density</li>
          </ul>
        </div>
      </div>
      <div className="link-to-wrapper">
        <Link to="aging" className="btn btn--main">
          See aging and hormones
        </Link>
      </div>
    </section>
  );
}

export default Aging;
