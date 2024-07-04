import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { NextPage } from "next";
import CategoryCard from "./Components/CategoryCard/CategoryCard";
import { photoCategories } from "@/utils/photoCategories";

const Home: NextPage = async () => {
  // const testCategory = {
  //   url: "/photo/24h_le_mans24",
  //   title: "Test",
  //   picture: { src: "/images/test.jpg", width: 100, height: 100 },
  // };

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.main_wrapper}>
          <article className={styles.intro_content}>
            <p className={styles.intro_title}>Bienvenue !</p>
            <p className={styles.intro_text}>
              Je m&apos;appelle Alexandre Joliet et je suis photographe amateur
              passionné. Vous trouverez ici une sélection de photographies
              réalisées par mes soins.
            </p>
            <p className={styles.intro_text}>
              Retrouvez les différentes catégories ci-dessous et tous les albums
              depuis le menu à tout moment.
            </p>
            <p className={styles.intro_text}>
              J&apos;espère que vous prendrez autant de plaisir à explorer mes
              œuvres que j&apos;en ai eu à les créer.
            </p>
            <p>Bon visionnage !</p>
          </article>
          <div className={styles.images_container}>
            {photoCategories.map((item: any) => (
              <CategoryCard data={item} key={item.title}></CategoryCard>
            ))}

            {/* <CategoryCard data={testCategory}></CategoryCard>
            <CategoryCard data={testCategory}></CategoryCard> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
