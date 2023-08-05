import { Link } from "react-router-dom";
import ClientVideo from "../components/ClientVideo";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../hooks/usePageTitle";
import { useResetScroll } from "../hooks/useResetScroll";
import styles from "../sass/pages/ClientProfiles.module.scss";
import clients from "../data/clients.json";

function ClientProfiles() {
  usePageTitle("Client Profiles");
  useResetScroll();

  return (
    <>
      <PageHeader title="Client Profiles" />

      <section className="section">
        <div className={`container ${styles["grid"]}`}>
          {clients.map((client, i) => (
            <Profile
              videoId={client.videoId}
              name={client.firstName}
              age={client.age}
              purpose={client.purpose}
              duration={client.duration}
              activities={client.activities
                .map(
                  (activity) => activity[0].toUpperCase() + activity.slice(1)
                )
                .join(", ")}
              priorExperience={client.priorExperience}
              hasTestimonial={client.testimonial}
              key={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function Profile({
  videoId,
  name,
  age,
  purpose,
  duration,
  activities,
  priorExperience,
  hasTestimonial = null,
}) {
  if (!videoId) return null;

  return (
    <>
      <ClientVideo className={styles["profile__video"]} videoId={videoId} />

      <div className={styles["profile__text-wrapper"]}>
        <h2 className="heading heading--secondary margin-bottom-sm-md">
          {name} <span>&mdash;</span>
          <span className={styles["profile__age"]}>{age}</span>
        </h2>

        <p>
          <i className={`las la-heartbeat ${styles["profile__icon"]}`}></i>{" "}
          {purpose}
        </p>
        <p>
          <i className={`lar la-clock ${styles["profile__icon"]}`}></i> Client
          for {duration}
        </p>
        {activities && (
          <p>
            <i className={`las la-biking ${styles["profile__icon"]}`}></i>{" "}
            {activities}
          </p>
        )}
        <p className="margin-bottom-sm">
          {priorExperience ? (
            <i className={`las la-check ${styles["profile__icon"]}`}></i>
          ) : (
            <i className={`las la-times ${styles["profile__icon"]}`}></i>
          )}
          {priorExperience ? "Prior gym experience" : "No prior gym experience"}
        </p>

        {hasTestimonial && (
          <Link to="/testimonials" className="btn btn--secondary">
            See testimonial
          </Link>
        )}
      </div>
    </>
  );
}

export default ClientProfiles;
