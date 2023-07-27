import SubPageHeader from "../components/SubPageHeader";
import styles from "../sass/pages/Testimonials.module.scss";
import testimonials from "../data/testimonials.json";
import Testimonial from "../components/Testimonial";
import { usePageTitle } from "../hooks/usePageTitle";
import { useResetScroll } from "../hooks/useResetScroll";

function Testimonials() {
  usePageTitle("HCHF | Testimonials");
  useResetScroll();

  return (
    <>
      <SubPageHeader title="Testimonials" />

      <section className={`section ${styles["testimonial-wrapper"]}`}>
        {testimonials.map((text, i) => {
          return (
            <div className={styles["testimonial"]} key={i}>
              <div className={styles["testimonial__number"]}>
                {`${i + 1}`.padStart(2, "0")}
              </div>
              <Testimonial text={text} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Testimonials;
