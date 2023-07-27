import styles from "../sass/layout/SubPageHeader.module.scss";

function SubPageHeader({ title }) {
  return (
    <div className={styles["header"]}>
      <h1 className="heading heading--primary">{title}</h1>
    </div>
  );
}

export default SubPageHeader;
