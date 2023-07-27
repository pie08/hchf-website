import { Link } from "react-router-dom";
import styles from "../sass/pages/NotFound.module.scss";
import { usePageTitle } from "../hooks/usePageTitle";

function NotFound() {
  usePageTitle("Not Found!");

  return (
    <div className={styles["error"]}>
      <h1 className="heading heading--primary">Oops!</h1>
      <p>It looks like this page does not exist!</p>
      <Link to="/" className="btn btn--cta">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
