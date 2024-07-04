import { CategoryProps } from "@/utils/types";
import Image from "next/image";
import styles from "./categoryCard.module.css";
import Link from "next/link";

type CategoryCardProps = {
  data: CategoryProps;
};

const CategoryCard = ({ data }: CategoryCardProps) => {
  return (
    <Link href={data.url} className={styles.card_wrapper}>
      {/* <div className={styles.card_wrapper}> */}
      <Image
        src={data.picture.src}
        alt=""
        fill
        // width={data.picture.width}
        // height={data.picture.height}
        sizes="(max-width: 1440px) 100vw, 50vw"
        className={styles.image}
      ></Image>
      <h4 className={styles.card_title}>{data.title}</h4>
      {/* </div> */}
    </Link>
  );
};

export default CategoryCard;
