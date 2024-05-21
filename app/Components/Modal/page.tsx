import { ImageProps } from "@/utils/types";
import Image from "next/image";
import styles from "./page.module.css";

type ModalProps = {
  openModal: boolean;
  closeModal: () => void;
  images: ImageProps[];
  selectedImage: ImageProps | any;
};

const Modal = ({
  openModal,
  closeModal,
  images,
  selectedImage,
}: ModalProps) => {
  console.log(selectedImage);

  return (
    <>
      {openModal && (
        <dialog open className={styles.modal_bg}>
          <div className={styles.modal_image_container}>
            <Image
              src={selectedImage.url}
              fill
              alt="Picture of the author"
              className={styles.modal_image}
              sizes="(max-width: 1440px) 100vw, 80vw"
            ></Image>
          </div>
          <form method="dialog" className={styles.modal_container}>
            <button onClick={closeModal} className={styles.modal_button}>
              X
            </button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default Modal;
