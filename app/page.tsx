import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { NextPage } from "next";
import CategoryCard from "./Components/CategoryCard/CategoryCard";
import handleFetch from "@/utils/fetch";

const Home: NextPage = async () => {
  const data = await handleFetch.fetchAllFolders();

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
              Découvrez les différentes catégories ci-dessous et accédez à tous
              les albums depuis le menu à tout moment.
            </p>
            <p className={styles.intro_text}>
              J&apos;espère que vous prendrez autant de plaisir à explorer mes
              œuvres que j&apos;en ai eu à les créer.
            </p>
            <p>Bon visionnage !</p>
          </article>
          <div className={styles.images_container}>
            {data.folders.map((item: any) => (
              <CategoryCard data={item} key={item.name}></CategoryCard>
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
