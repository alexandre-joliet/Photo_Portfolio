"use client";
import Image from "next/image";
import styles from "../../page.module.css";
import { useState } from "react";
import Modal from "@/app/Components/Modal/Modal";
import { ImageProps } from "@/utils/types";

type PhotoDisplayProps = {
  data: {
    folderName: string;
    imagesArray: ImageProps[];
  };
};

const PhotoDisplay = ({ data }: PhotoDisplayProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageInfos, setImageInfos] = useState<ImageProps>();

  const images = data.imagesArray;

  const handleModalActions = (item: ImageProps) => {
    setImageInfos(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <h3 className={styles.page_title}>
        <b>Album : </b>
        <em>{data.folderName}</em>
      </h3>
      <div className={styles.images_container}>
        {data.imagesArray.map((item: any) => (
          <div
            key={item.asset_id}
            className={styles.image_wrapper}
            onClick={() => handleModalActions(item)}
          >
            <Image
              src={item.url}
              fill
              alt="Picture of the author"
              className={styles.image}
              sizes="(max-width: 1440px) 100vw, 50vw"
            ></Image>
          </div>
        ))}
        <Modal
          openModal={openModal}
          handleCloseModal={() => handleCloseModal()}
          selectedImage={imageInfos}
          images={images}
        />
      </div>
    </>
  );
};

export default PhotoDisplay;
