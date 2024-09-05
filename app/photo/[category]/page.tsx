import Header from "@/app/Components/Header/Header";
import handleFetch from "@/utils/fetch";
import styles from "../../page.module.css";
import FolderCard from "@/app/Components/FolderCard/FolderCard";

const Category = async ({ params }: { params: { category: string } }) => {
  const category = params.category;

  const data = await handleFetch.fetchAllFoldersFromCategory(category);

  if (data.folders.length != 0) {
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
  } else {
    return (
      <>
        <main className={styles.main}>
          <Header />
          <div className={styles.main_wrapper}>
            <h3 className={styles.page_title}>Aucun résultat trouvé</h3>
          </div>
        </main>
      </>
    );
  }
};

export default Category;
