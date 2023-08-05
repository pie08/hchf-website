import { Link } from "react-router-dom";
import styles from "../sass/components/ClientProfiles.module.scss";

function ClientProfiles() {
  return (
    <section className="section section--bg-gray">
      <div className="container center-text margin-bottom-md">
        <p className="heading heading--sub">Client profiles</p>
      </div>

      <div className={`container ${styles["profiles"]}`}>
        <Profile
          name="Keith"
          age="67"
          description="Rotator cuff surgery"
          imageLowRes="assets/images/client-images/profiles/1x/keith-bridge.webp"
          imageHighRes="assets/images/client-images/profiles/2x/keith-bridge.webp"
        />

        <Profile
          name="Anna"
          age="60"
          description="Knee replacement surgery"
          imageLowRes="assets/images/client-images/profiles/1x/anna-boudreau.webp"
          imageHighRes="assets/images/client-images/profiles/2x/anna-boudreau.webp"
        />

        <Profile
          name="Ray"
          age="62"
          description="Knee replacement surgery"
          imageLowRes="assets/images/client-images/profiles/1x/ray.webp"
          imageHighRes="assets/images/client-images/profiles/2x/ray.webp"
        />
      </div>

      <div className="link-to-wrapper">
        <Link to="/profiles" className="btn btn--secondary">
          See all profiles
        </Link>
      </div>
    </section>
  );
}

function Profile({ name, age, description, imageLowRes, imageHighRes }) {
  return (
    <div className={styles.profile}>
      <img
        className={styles.profile__image}
        srcSet={`${imageLowRes} 1x, ${imageHighRes} 2x`}
        src={`${imageLowRes}`}
      />

      <div className={styles.profile__textWrapper}>
        <p className={styles.profile__name}>
          {name} <span>&mdash;</span>{" "}
          <span className={styles["profile__age"]}>67</span>
        </p>
        <p className={styles.profile__history}>{description}</p>
      </div>
    </div>
  );
}

export default ClientProfiles;
