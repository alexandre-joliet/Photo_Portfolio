import { CategoryProps } from "@/utils/types";
import Image from "next/image";
import styles from "../CategoryCard/categoryCard.module.css";
import Link from "next/link";
import { removeAccents } from "@/utils/removeAccents";
import { folderDetails } from "@/utils/foldersDetails";

type CategoryCardProps = {
  data: CategoryProps;
  category: string;
};

const FolderCard = ({ data, category }: CategoryCardProps) => {
  const findFolder = folderDetails.find((item) => item.title === data.name);
  const folderTag = findFolder?.tag;

  const noAccentValue = removeAccents(data.name);

  return (
    <Link
      href={`/photo/${category}/${folderTag}`}
      className={styles.card_wrapper}
    >
      <Image
        src={`/images/folders/${noAccentValue}.avif`}
        alt=""
        fill
        sizes="(max-width: 1440px) 100vw, 50vw"
        className={styles.image}
      ></Image>
      <h4 className={styles.card_title}>{data.name}</h4>
    </Link>
  );
};

export default FolderCard;
