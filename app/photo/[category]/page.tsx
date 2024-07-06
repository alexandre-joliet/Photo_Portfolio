import Header from "@/app/Components/Header/Header";
import handleFetch from "@/utils/fetch";
import styles from "../../page.module.css";
import FolderCard from "@/app/Components/FolderCard/FolderCard";

const Category = async ({ params }: any) => {
  const category = params.category;
  // console.log(category);

  const data = await handleFetch.fetchAllFoldersFromCategory(category);
  // console.log(data);

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.main_wrapper}>
          <div className={styles.images_container}>
            {data.folders.map((item: any) => (
              <FolderCard
                data={item}
                category={category}
                key={item.name}
              ></FolderCard>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Category;
