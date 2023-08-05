import PageHeader from "../components/PageHeader";
import styles from "../sass/pages/Testimonials.module.scss";
import Testimonial from "../components/Testimonial";
import clients from "../data/clients.json";
import { usePageTitle } from "../hooks/usePageTitle";
import { useResetScroll } from "../hooks/useResetScroll";

function Testimonials() {
  usePageTitle("HCHF | Testimonials");
  useResetScroll();

  return (
    <>
      <PageHeader title="Testimonials" />

      <section className={`section ${styles["testimonial-wrapper"]}`}>
        {clients
          .filter((client) => client.testimonial)
          .map((client, i) => {
            return (
              <div key={i}>
                <div className={styles["testimonial__number"]}>
                  {`${i + 1}`.padStart(2, "0")}
                </div>
                <Testimonial text={client.testimonial} />
              </div>
            );
          })}
      </section>
    </>
  );
}

export default Testimonials;
