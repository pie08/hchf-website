import Loader from "./Loader";
import styles from "../../sass/components/FullPageLoader.module.scss";

function FullPageLoader() {
  return (
    <div className={styles["loader-full-page"]}>
      <Loader />
    </div>
  );
}

export default FullPageLoader;
