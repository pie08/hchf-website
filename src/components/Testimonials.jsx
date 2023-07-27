/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import styles from "../sass/components/Testimonials.module.scss";
import testimonials from "../data/testimonials.json";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <section className={`section ${styles.sectionTestimonials}`}>
      <div className="container center-text margin-bottom-bg">
        <p className="heading heading--sub margin-bottom-sm">Testimonials</p>
        <h2 className="heading heading--secondary">
          I help my clients feel, move, and look better
        </h2>
      </div>
      <div className={`container ${styles.testimonialWrapper}`}>
        {testimonials.map((text, i) => {
          if (i === 0) return;
          return <Testimonial text={text} key={i} />;
        })}
      </div>
      <div className="link-to-wrapper">
        <Link to="/testimonials" className="btn btn--secondary">
          See all testimonials
        </Link>
      </div>
    </section>
  );
}

export default Testimonials;
