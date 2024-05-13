import styles from "./page.module.css";
import Header from "./Components/Header/page";
import handleFetch from "@/utils/fetch";
import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = async () => {
  // const data = await handleFetch.fetchAllImages();

  // console.log(data);

  return (
    <>
      <main className={styles.main}>
        <Header />
        {/* <PhotoDisplay /> */}

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
      </main>
    </>
  );
};

export default Home;
