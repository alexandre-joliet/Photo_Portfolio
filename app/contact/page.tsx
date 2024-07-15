import styles from "./contact.module.css";
import Header from "../Components/Header/Header";
import Image from "next/image";
import Avatar from "../../public/images/bio.jpg";

const Contact = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.main_wrapper}>
          <div className={styles.avatar_wrapper}>
            <Image
              src={Avatar}
              fill
              className={styles.image}
              sizes="(max-width: 1440px) 100vw, 50vw"
              alt="Portrait d'Alexandre Joliet"
            ></Image>
          </div>
          <div className={styles.bio_container}>
            <p className={styles.bio_title}>Bio</p>
            <article className={styles.bio_content}>
              <p className={styles.bio_text}>
                Ma passion pour la photographie trouve ses racines dans un geste
                simple, mais significatif de mon père. Lorsque j&apos;étais plus
                jeune, j&apos;aimais emprunter son appareil photo pour faire
                comme lui, comme les grands. Voyant mon intérêt grandissant, il
                m&apos;a finalement offert l&apos;un de ses appareils photo, un
                Canon 400D que j&apos;ai toujours. Ce cadeau a été le point de
                départ de mon aventure dans le monde de la photographie.
              </p>
              <p className={styles.bio_text}>
                Avec cet appareil entre les mains, j&apos;ai commencé à capturer
                les moments et les paysages qui m&apos;entouraient. J&apos;ai
                découvert le plaisir de figer des instants uniques et de les
                transformer en souvenirs visuels. Chaque photo que je prenais me
                permettait de voir le monde sous un nouvel angle. J&apos;ai
                également découvert par la suite le travail de post-production
                et le fait de pouvoir encore sublimer davantage la réalité et
                exprimer une certaine vision dans mes clichés.
              </p>
              <p className={styles.bio_text}>
                Aujourd&apos;hui, en tant que photographe amateur, je poursuis
                cette passion avec le même enthousiasme que lorsque j&apos;ai
                reçu mon premier appareil photo. Chaque image que je capture est
                un hommage à ce cadeau précieux de mon père et à la passion
                qu&apos;il a su éveiller en moi.
              </p>
              <p className={styles.bio_text}>
                Je présente ici une sélection de photographies réalisées par mes
                soins.
              </p>
              <p className={styles.bio_text}>
                J&apos;espère que vous prendrez autant de plaisir à explorer mes
                œuvres que j&apos;en ai eu à les créer.
              </p>
              <p>Bon visionnage !</p>
            </article>
            <hr className={styles.hr} />
          </div>
          <div className={styles.contact_container}>
            <p className={styles.contact_title}>Contact</p>
            <article className={styles.contact_content}>
              <p className={styles.contact_text}>
                Email:{" "}
                <a href="mailto: alexandre.joliet@gmail.com">
                  {" "}
                  alexandre.joliet@gmail.com
                </a>
              </p>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
