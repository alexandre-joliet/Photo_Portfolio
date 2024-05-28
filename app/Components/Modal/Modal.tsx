import { ImageProps } from "@/utils/types";
import Image from "next/image";
import styles from "./page.module.css";
import closeIcon from "../../../public/icons/close_white_48dp.svg";
import previousIcon from "../../../public/icons/arrow_back_white-24dp.svg";
import nextIcon from "../../../public/icons/arrow_forward_white-24dp.svg";
import { useEffect, useState } from "react";

type ModalProps = {
  openModal: boolean;
  handleCloseModal: () => void;
  selectedImage: ImageProps | any;
  images: ImageProps[];
};

const Modal = ({
  openModal,
  handleCloseModal,
  selectedImage,
  images,
}: ModalProps) => {
  const [imageShown, setImageShown] = useState(selectedImage);
  const [url, setUrl] = useState("");
  const [frame, setFrame] = useState(false);
  const [padding, setPadding] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      setImageShown(selectedImage);
      setUrl(selectedImage.url);
    }
  }, [selectedImage]);

  const handlePreviousImage = () => {
    let previousId = imageShown.id - 1;
    if (previousId < 0) {
      previousId = 0;
    }
    const previousImage: ImageProps | any = images.find(
      (item) => item.id === previousId
    );
    setUrl(previousImage.url);
    setImageShown(previousImage);
  };

  const handleNextImage = () => {
    let nextId = imageShown.id + 1;
    if (nextId > images.length - 1) {
      nextId = images.length - 1;
    }
    const nextImage: ImageProps | any = images.find(
      (item) => item.id === nextId
    );
    setUrl(nextImage.url);
    setImageShown(nextImage);
  };

  const handleFrameOptions = () => {
    if (!frame) {
      setFrame(true);
    } else {
      setFrame(false);
    }
  };

  const isFramed = frame ? `${styles.image_frame}` : "";

  const handlePaddingOptions = () => {
    if (!padding) {
      setPadding(true);
    } else {
      setPadding(false);
    }
  };

  const isPadded = padding ? `${styles.image_padding}` : "";

  return (
    <>
      {openModal && (
        <dialog open className={styles.modal_bg}>
          <button
            onClick={handleCloseModal}
            className={`${styles.modal_button} ${styles.button_close} ${styles.button_close_mobile} ${styles.hidden_mobile}`}
          >
            <Image src={closeIcon} alt="Fermer"></Image>
          </button>
          <div className={styles.modal_image_container}>
            <Image
              src={url}
              width={2048}
              height={1024}
              alt="Picture of the author"
              className={`${styles.modal_image} ${isFramed} ${isPadded}`}
              sizes="(max-width: 1440px) 100vw, 80vw"
            ></Image>
          </div>
          <div
            className={`${styles.mobile_buttons_container} ${styles.hidden_mobile}`}
          >
            <button
              onClick={handlePreviousImage}
              className={`${styles.modal_button} ${styles.button_arrows} `}
            >
              <Image src={previousIcon} alt="Image précédente"></Image>
            </button>
            <button
              onClick={handleNextImage}
              className={`${styles.modal_button} ${styles.button_arrows} `}
            >
              <Image src={nextIcon} alt="Image suivant"></Image>
            </button>
          </div>
          <form method="dialog" className={styles.modal_buttons_container}>
            <button
              onClick={handlePreviousImage}
              className={`${styles.modal_button} ${styles.button_arrows} ${styles.hidden_desktop}`}
            >
              <Image src={previousIcon} alt="Image précédente"></Image>
            </button>
            <button
              onClick={handleCloseModal}
              className={`${styles.modal_button} ${styles.button_close} ${styles.hidden_desktop}`}
            >
              <Image src={closeIcon} alt="Fermer"></Image>
            </button>
            <button
              onClick={handleNextImage}
              className={`${styles.modal_button} ${styles.button_arrows} ${styles.hidden_desktop}`}
            >
              <Image src={nextIcon} alt="Image suivant"></Image>
            </button>
            {/* <div className={styles.image_options_container}> */}
            <button
              className={`${styles.modal_button} ${styles.button_option}`}
            >
              {" "}
              Options
            </button>
            <div className={styles.image_options_content}>
              <div className={styles.image_option_item}>
                <label htmlFor="frame">Cadre</label>
                <input
                  type="checkbox"
                  name="frame"
                  id="frame"
                  onClick={handleFrameOptions}
                ></input>
              </div>
              <div className={styles.image_option_item}>
                <label htmlFor="frame">Passe-partout</label>
                <input
                  type="checkbox"
                  name="padding"
                  id="padding"
                  onClick={handlePaddingOptions}
                ></input>
              </div>
            </div>
            {/* </div> */}
          </form>
        </dialog>
      )}
    </>
  );
};

export default Modal;
