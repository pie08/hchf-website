import styles from "../../sass/layout/PageHeader.module.scss";

function PageHeader({ title }) {
  return (
    <div className={styles["header"]}>
      <h1 className="heading heading--primary">{title}</h1>
    </div>
  );
}

export default PageHeader;
