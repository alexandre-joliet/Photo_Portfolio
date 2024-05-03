import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/page";
import handleFetch from "@/utils/fetch";

const Home = async () => {
  // const data = await handleFetch.fetchAllImages();

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
              alt="Picture of the author"
              className={styles.image}
            ></Image>
          </div>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/avatar.jpg"
              fill
              alt="Picture of the author"
              className={styles.image}
            ></Image>
          </div>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/test.jpg"
              fill
              alt="Picture of the author"
              className={styles.image}
            ></Image>
          </div>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/test.jpg"
              fill
              alt="Picture of the author"
              className={styles.image}
            ></Image>
          </div>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/avatar.jpg"
              fill
              alt="Picture of the author"
              className={styles.image}
            ></Image>
          </div>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/test.jpg"
              fill
              alt="Picture of the author"
              className={styles.image}
            ></Image>
          </div>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/avatar.jpg"
              fill
              alt="Picture of the author"
              className={styles.image}
            ></Image>
          </div>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/avatar.jpg"
              fill
              alt="Picture of the author"
              className={styles.image}
            ></Image>
          </div>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/avatar.jpg"
              fill
              alt="Picture of the author"
              className={styles.image}
            ></Image>
          </div>

          {/* MAP */}
          {/* {data.map((item: any) => (
            <div key={item.id} className={styles.image_wrapper}>
              <Image
                src={item.url}
                fill
                alt="Picture of the author"
                className={styles.image}
              ></Image>
            </div>
          ))} */}
        </div>
      </main>
    </>
  );
};

export default Home;
