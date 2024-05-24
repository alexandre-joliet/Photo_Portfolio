import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { NextPage } from "next";

const Home: NextPage = async () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
      </main>
    </>
  );
};

export default Home;
