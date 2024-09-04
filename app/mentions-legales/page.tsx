/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import Header from "../Components/Header/Header";
import { NextPage } from "next";

const Mentions: NextPage = async () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.main_wrapper}>
          <article className={styles.main_article}>
            <h1 className={styles.article_title}>Mentions légales </h1>
            <section className={styles.article_section}>
              <h3 className={styles.section_subtitle}>Identité de l'éditeur</h3>
              <p className={styles.section_text}>
                Ce site est édité par{" "}
                <a href="https://www.linkedin.com/in/alexandrejoliet/">
                  Alexandre JOLIET
                </a>
                , Développeur Web.
              </p>
              <h3 className={styles.section_subtitle}>Coordonnées</h3>
              <p className={styles.section_text}>
                {" "}
                Adresse : 10 rue Henri de Toulouse Lautrec, 41100 NAVEIL
              </p>

              <p className={styles.section_text}> Téléphone : 06 71 04 40 42</p>
              <p className={styles.section_text}>
                Courrier électronique :{" "}
                <a href="mailto:alexandre.joliet@gmail.com">
                  alexandre.joliet@gmail.com
                </a>
              </p>
              <h3 className={styles.section_subtitle}>
                Propriété intellectuelle
              </h3>
              <p className={styles.section_text}>
                Les images utilisées sur ce site ont toutes été réalisées par
                l'éditeur du site, Alexandre Joliet, et lui appartiennent. De ce
                fait, elles ne doivent en aucun cas être récupérées, utilisées
                ou modifiées sans son accord préalable.
              </p>
              <h3 className={styles.section_subtitle}>Hébergement </h3>
              <p className={styles.section_text}>
                Ce site est hébergé par la société Vercel Inc., située 340 S
                Lemon Ave #4133 Walnut, CA 91789, et joignable au (559)
                288-7060.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default Mentions;
