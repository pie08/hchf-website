import { Link } from "react-router-dom";
import styles from "../sass/pages/NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.error}>
      <h1 className="heading heading--primary">Oops!</h1>
      <p>It looks like this page does not exist!</p>
      <Link to="/home" className="btn btn--main">
        Back to homepage
      </Link>
    </div>
  );
}

export default NotFound;
