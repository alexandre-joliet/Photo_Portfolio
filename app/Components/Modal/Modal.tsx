import { ImageProps } from "@/utils/types";
import Image from "next/image";
import styles from "./page.module.css";
import closeIcon from "../../../public/icons/close_black_48dp.svg";
import previousIcon from "../../../public/icons/arrow_back_black-24dp.svg";
import nextIcon from "../../../public/icons/arrow_forward_black-24dp.svg";

type ModalProps = {
  openModal: boolean;
  handleCloseModal: () => void;
  selectedImage: ImageProps | any;
};

const Modal = ({ openModal, handleCloseModal, selectedImage }: ModalProps) => {
  // console.log(selectedImage);

  return (
    <>
      {openModal && (
        <dialog open className={styles.modal_bg}>
          <div className={styles.modal_image_container}>
            <Image
              src={selectedImage.url}
              // fill
              width={2048}
              height={1024}
              alt="Picture of the author"
              className={styles.modal_image}
              sizes="(max-width: 1440px) 100vw, 80vw"
            ></Image>
          </div>
          <form method="dialog" className={styles.modal_buttons_container}>
            <button
              onClick={handleCloseModal}
              className={`${styles.modal_button} ${styles.button_arrows}`}
            >
              <Image src={previousIcon} alt="Image précédente"></Image>
            </button>
            <button
              onClick={handleCloseModal}
              className={`${styles.modal_button} ${styles.button_close}`}
            >
              <Image src={closeIcon} alt="Fermer"></Image>
            </button>
            <button
              onClick={handleCloseModal}
              className={`${styles.modal_button} ${styles.button_arrows}`}
            >
              <Image src={nextIcon} alt="Image suivant"></Image>
            </button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default Modal;
