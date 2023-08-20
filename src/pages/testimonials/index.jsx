import PageHeader from "../../components/section/PageHeader";
import styles from "../../sass/pages/testimonials/Testimonials.module.scss";
import Testimonial from "../../components/ui/Testimonial";
import clients from "../../data/clients.json";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useResetScroll } from "../../hooks/useResetScroll";

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
              <div key={i} className="container">
                <div className={styles["testimonial__number"]}>
                  {`${i + 1}`.padStart(2, "0")}
                </div>
                <Testimonial
                  text={client.testimonial}
                  author={`${
                    client.firstName[0].toUpperCase() +
                    client.firstName.slice(1)
                  }`}
                />
              </div>
            );
          })}
      </section>
    </>
  );
}

export default Testimonials;
