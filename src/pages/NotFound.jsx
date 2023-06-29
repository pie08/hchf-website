import { useNavigate } from "react-router-dom";
import styles from "../sass/pages/NotFound.module.scss";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.error}>
      <h1 className="heading heading--primary">Oops!</h1>
      <p>It looks like this page does not exist!</p>
      <button className="btn btn--main" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}

export default NotFound;
