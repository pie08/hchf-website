import { Link } from "react-router-dom";
import ClientVideo from "../components/ClientVideo";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../hooks/usePageTitle";
import { useResetScroll } from "../hooks/useResetScroll";
import styles from "../sass/pages/ClientProfiles.module.scss";

function ClientProfiles() {
  usePageTitle("Client Profiles");
  useResetScroll();

  return (
    <>
      <PageHeader title="Client Profiles" />

      <section className="section">
        <div className={`container grid grid--2-cols`}>
          <Profile
            videoId="clo967i9e6"
            name="Keith"
            age={67}
            purpose="Rotator cuff surgery"
            duration="2 years"
            activities="Skiing, Sailing, Hiking"
            priorExperience={false}
            hasTestimonial={true}
          />
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
  return (
    <>
      <ClientVideo className={styles["profile__video"]} videoId={videoId} />
      <div className={styles["profile__text-wrapper"]}>
        <h2 className="heading heading--secondary margin-bottom-sm-md">
          {name} <span>&mdash;</span>
          <span className={styles["profile__age"]}>{age}</span>
        </h2>

        <p>{purpose}</p>
        <p>Client for {duration}</p>
        <p>Activities: {activities}</p>
        <p className="margin-bottom-sm">
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
