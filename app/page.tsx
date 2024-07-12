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
          <div className={styles.images_container}>
            {data.folders.map((item: any) => (
              <CategoryCard data={item} key={item.name}></CategoryCard>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
