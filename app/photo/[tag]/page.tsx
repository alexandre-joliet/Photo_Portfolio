import Image from "next/image";
import Header from "@/app/Components/Header/page";
import styles from "../../page.module.css";
import handleFetch from "@/utils/fetch";

const Tag = async ({ params }: any) => {
  const tag = params.tag;

  const data = await handleFetch.fetchAllImages(tag);

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.main_wrapper}>
          <h3 className={styles.page_title}>
            <br />
            {data.folderName}
          </h3>
          <div className={styles.images_container}>
            {data.imagesArray.map((item: any) => (
              <div key={item.asset_id} className={styles.image_wrapper}>
                <Image
                  src={item.url}
                  fill
                  alt="Picture of the author"
                  className={styles.image}
                  sizes="(max-width: 1440px) 100vw, 50vw"
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Tag;
