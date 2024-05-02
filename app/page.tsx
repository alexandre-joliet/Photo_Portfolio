"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ImageComponent from "./Components/ImageComponent/page";
import Header from "./Components/Header/page";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        {/* <h1>Alexandre Joliet</h1> */}
        <div className={styles.images_container}>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/avatar.jpg"
              fill
              objectFit="cover"
              alt="Picture of the author"
              className={styles.image}
            ></Image>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
