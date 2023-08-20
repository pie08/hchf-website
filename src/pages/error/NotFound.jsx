import styles from "../../sass/pages/error/NotFound.module.scss";
import { usePageTitle } from "../../hooks/usePageTitle";
import LinkButton from "../../components/ui/LinkButton";

function NotFound() {
  usePageTitle("Not Found!");

  return (
    <div className={styles["error"]}>
      <h1 className="heading heading--primary">Oops!</h1>
      <p>It looks like this page does not exist!</p>
      <LinkButton to="/">Go back home</LinkButton>
    </div>
  );
}

export default NotFound;
