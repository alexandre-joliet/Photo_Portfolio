import { CategoryProps } from "@/utils/types";
import Image from "next/image";
import styles from "./categoryCard.module.css";
import Link from "next/link";

type CategoryCardProps = {
  data: CategoryProps;
};

const CategoryCard = ({ data }: CategoryCardProps) => {
  return (
    <div className={styles.card_wrapper}>
      <Link href={data.url}>
        <Image
          src={data.picture.src}
          alt=""
          fill
          // width={data.picture.width}
          // height={data.picture.height}
          sizes="(max-width: 1440px) 100vw, 50vw"
          className={styles.image}
        ></Image>
        {/* {data.title} */}
      </Link>
    </div>
  );
};

export default CategoryCard;
