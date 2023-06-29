import styles from "../sass/components/Aging.module.scss";

function Aging() {
  return (
    <section className="section-aging">
      <div className="container">
        <p className="subheading">Aging & Hormones</p>
        <h2 className="heading-secondary">
          Aging results in the reduction of anabolic hormones
        </h2>
        <h3 className="heading-tertiary center-text margin-bottom-md">
          Physiological changes from decreased hormone levels
        </h3>
      </div>
      <div className="container aging-container">
        <div className="aging-list-container">
          <h3 className="aging-list-heading heading-tertiary center-text">
            <ion-icon name="arrow-up-outline"></ion-icon>
            <span>Increases in</span>
          </h3>
          <ul className="aging-list">
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

        <div className="aging-list-container">
          <h3 className="aging-list-heading heading-tertiary center-text">
            <ion-icon name="arrow-down-outline"></ion-icon>
            <span>Decreases in</span>
          </h3>
          <ul className="aging-list">
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
      <div className="link-container">
        <a href="aging.html" className="to-page-link">
          See aging & hormones
        </a>
      </div>
    </section>
  );
}

export default Aging;
