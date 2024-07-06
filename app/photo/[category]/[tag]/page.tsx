import Header from "@/app/Components/Header/Header";
import styles from "../../../page.module.css";
import handleFetch from "@/utils/fetch";
import PhotoDisplay from "./PhotoDisplay";

const Tag = async ({ params }: any) => {
  const tag = params.tag;
  const data = await handleFetch.fetchAllImages(tag);

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.main_wrapper}>
          <PhotoDisplay data={data} />
        </div>
      </main>
    </>
  );
};

export default Tag;
