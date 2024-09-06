/* eslint-disable react/no-unescaped-entities */
import styles from "./page.module.css";
import Header from "./Components/Header/Header";

const NotFound = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.main_wrapper}>
          <h2 className={styles.page_title404}>Erreur 404</h2>
          <p className={styles.page_text}>La page demandée n'existe pas.</p>
        </div>
      </main>
    </>
  );
};

export default NotFound;
