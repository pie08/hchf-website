import styles from "../../sass/pages/home/Testimonials.module.scss";
import testimonials from "../../data/testimonials.json";
import Testimonial from "../../components/ui/Testimonial";
import LinkButton from "../../components/ui/LinkButton";

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
        <LinkButton to="/testimonials">See all testimonials</LinkButton>
      </div>
    </section>
  );
}

export default Testimonials;
