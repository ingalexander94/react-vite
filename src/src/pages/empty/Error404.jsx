import styles from "./error.module.css";

const Error404 = () => {
  return (
    <div className={`wrapper ${styles.error}`}>
      <h3>Error 404</h3>
    </div>
  );
};

export default Error404;
