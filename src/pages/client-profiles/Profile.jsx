import ClientVideo from "../../components/ui/ClientVideo";
import LinkButton from "../../components/ui/LinkButton";
import styles from "../../sass/pages/client-profiles/ClientProfiles.module.scss";

export default function Profile({
  videoId,
  name,
  age,
  purpose,
  duration,
  activities,
  priorExperience,
  hasTestimonial = null,
  children,
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
          <LinkButton to="/testimonials">See testimonial</LinkButton>
        )}

        {children}
      </div>
    </>
  );
}
