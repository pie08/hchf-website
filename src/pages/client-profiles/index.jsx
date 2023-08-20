import PageHeader from "../../components/section/PageHeader";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useResetScroll } from "../../hooks/useResetScroll";
import styles from "../../sass/pages/client-profiles/ClientProfiles.module.scss";
import clients from "../../data/clients.json";
import Profile from "./Profile";

function ClientProfiles() {
  usePageTitle("Client Profiles");
  useResetScroll();

  return (
    <>
      <PageHeader title="Client Profiles" />

      <section className="section">
        <div className={`container ${styles["grid"]}`}>
          {clients.map((client, i) => {
            if (client.category && client.category !== "adult") return;
            return (
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
            );
          })}

          <Profile
            videoId="i7fc6necbb"
            name="alex"
            age={17}
            purpose="Baseball / Pitching"
            duration="3 years"
            activities=""
            priorExperience={false}
            hasTestimonial={false}
          >
            <div className={styles["profile__scholarship"]}>
              <h3 className="heading heading--tertiary">
                Scholarship to Penn State
              </h3>

              <img
                src="/assets/images/client-images/profiles/alex/alex-penn-state.jpg"
                className={styles["profile__scholarship-image"]}
              />
            </div>
          </Profile>

          {clients.map((client, i) => {
            if (client.category !== "baseball") return;

            return (
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
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ClientProfiles;
