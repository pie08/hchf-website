import { Link } from "react-router-dom";
import styles from "../sass/components/ClientProfiles.module.scss";

function ClientProfiles() {
  return (
    <section className={styles.sectionProfiles}>
      <div className="container">
        <p className="heading heading--sub margin-bottom-md">Client profiles</p>
      </div>

      <div className="container grid grid--3-cols">
        <div className={styles.profile}>
          <img
            className={styles.profile__image}
            src="/assets/images/client-images/keith-bridge.jpg"
            alt="Client skiing"
          />

          <div className={styles.profile__textWrapper}>
            <p className={styles.profile__name}>Keith</p>
            <p className={styles.profile__age}>Age 67</p>
            <p className={styles.profile__history}>Rotator cuff surgery</p>
          </div>
        </div>

        <div className={styles.profile}>
          <img
            className={styles.profile__image}
            src="/assets/images/client-images/anna-boudreau.jpg"
            alt="Before and after of woman standing next to herself after 7 years looking much better now"
          />

          <div className={styles.profile__textWrapper}>
            <p className={styles.profile__name}>Anna</p>
            <p className={styles.profile__age}>Age 60</p>
            <p className={styles.profile__history}>Knee replacement surgery</p>
          </div>
        </div>

        <div className={styles.profile}>
          <img
            className={styles.profile__image}
            src="/assets/images/client-images/ray-profile.jpg"
            alt=""
          />

          <div className={styles.profile__textWrapper}>
            <p className={styles.profile__name}>Ray</p>
            <p className={styles.profile__age}>Age 62</p>
            <p className={styles.profile__history}>Knee replacement surgery</p>
          </div>
        </div>
      </div>

      <div className="link-to-wrapper">
        <Link to="/profiles" className="btn btn--main">
          See all profiles
        </Link>
      </div>
    </section>
  );
}

export default ClientProfiles;
