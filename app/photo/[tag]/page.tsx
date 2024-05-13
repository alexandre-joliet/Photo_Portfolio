import Image from "next/image";
import Header from "@/app/Components/Header/page";
import styles from "../../page.module.css";
import handleFetch from "@/utils/fetch";

const Folder = async ({ params }: any) => {
  const tag = params.tag;

  const data = await handleFetch.fetchAllImages(tag);

  return (
    <>
      <main className={styles.main}>
        <Header />
        <h1 className={styles.page_title}>
          <br />
          {data.folderName}
        </h1>
        <div className={styles.images_container}>
          {data.imagesArray.map((item: any) => (
            <div key={item.id} className={styles.image_wrapper}>
              <Image
                src={item.url}
                fill
                alt="Picture of the author"
                className={styles.image}
              ></Image>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Folder;
