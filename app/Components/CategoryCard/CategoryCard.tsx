import { CategoryProps } from "@/utils/types";
import Image from "next/image";
import styles from "./categoryCard.module.css";
import Link from "next/link";

type CategoryCardProps = {
  data: CategoryProps;
};

const CategoryCard = ({ data }: CategoryCardProps) => {
  // console.log(data);

  let renamedValue = data.name;
  if (data.name === "Vehicules") {
    renamedValue = "Véhicules";
  }

  return (
    <Link href={`/photo/${data.name}`} className={styles.card_wrapper}>
      <Image
        src={`/images/categories/${renamedValue}.avif`}
        alt=""
        fill
        sizes="(max-width: 1440px) 100vw, 50vw"
        className={styles.image}
      ></Image>
      <h4 className={styles.card_title}>{renamedValue}</h4>
    </Link>
  );
};

export default CategoryCard;
