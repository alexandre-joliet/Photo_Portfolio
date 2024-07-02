import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { NextPage } from "next";
import CategoryCard from "./Components/CategoryCard/CategoryCard";
import test from "../public/images/avatar.jpg";

const Home: NextPage = async () => {
  const testCategory = {
    url: "/photo/24h_le_mans24",
    title: "Test",
    picture: { src: "/images/avatar.jpg", width: 100, height: 100 },
  };

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.main_wrapper}>
          <article className={styles.intro_content}>
            <p className={styles.intro_title}>Bienvenue !</p>
            <p className={styles.intro_text}>
              Vous trouverez ici une sélection de photographies réalisées par
              mes soins. Je ne suis pas photographe professionnel mais juste un
              amateur éclairé !
            </p>
            <p className={styles.intro_text}>
              Retrouvez les différentes catégories ci-dessous et tous les albums
              depuis le menu à tout moment.
            </p>
            <p>Bon visionnage !</p>
          </article>
          <div className={styles.images_container}>
            <CategoryCard data={testCategory}></CategoryCard>
            <CategoryCard data={testCategory}></CategoryCard>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
