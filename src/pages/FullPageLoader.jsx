import Loader from "../components/Loader";
import styles from "../sass/pages/FullPageLoader.module.scss";

function FullPageLoader() {
  return (
    <div className={styles["loader-full-page"]}>
      <Loader />
    </div>
  );
}

export default FullPageLoader;
