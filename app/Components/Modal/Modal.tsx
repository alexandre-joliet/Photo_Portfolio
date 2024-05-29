import { ImageProps } from "@/utils/types";
import Image from "next/image";
import styles from "./page.module.css";
import closeIcon from "../../../public/icons/close_white_48dp.svg";
import previousIcon from "../../../public/icons/arrow_back_white-24dp.svg";
import nextIcon from "../../../public/icons/arrow_forward_white-24dp.svg";
import { useEffect, useRef, useState } from "react";

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
  // ***** IMAGE *****
  const [imageShown, setImageShown] = useState(selectedImage);
  const [url, setUrl] = useState("");

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

  // ***** OPTIONS *****
  const [frameValue, setFrameValue] = useState("");
  const [inputFrameValue, setInputFrameValue] = useState(0);
  const [paddingValue, setPaddingValue] = useState("");
  const [inputPaddingValue, setInputPaddingValue] = useState(0);

  const handleFrameOptions = (value: any) => {
    setInputFrameValue(value);
    setFrameValue(`${value}px solid black`);
  };

  const handlePaddingOptions = (value: any) => {
    setInputPaddingValue(value);
    setPaddingValue(`${value}px`);
  };

  // const isFramed = frame ? `${styles.image_frame}` : "";
  // const isPadded = padding ? `${styles.image_padding}` : "";

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
              className={`${styles.modal_image}`}
              sizes="(max-width: 1440px) 100vw, 80vw"
              style={{
                border: frameValue,
                padding: paddingValue,
                boxShadow: "inset 0 0 5px 2px rgba(0, 0, 0, 0.5)",
              }}
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
              <Image src={nextIcon} alt="Image suivante"></Image>
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
                <label htmlFor="frame">Largeur du cadre</label>
                {/* <input
                  type="checkbox"
                  name="frame"
                  id="frame"
                  onClick={handleFrameOptions}
                ></input> */}
                <div className={styles.frame_input}>
                  <input
                    type="range"
                    name="frame"
                    id="frame"
                    min="0"
                    max="40"
                    value={inputFrameValue}
                    step="10"
                    list="markers"
                    onChange={(event) => handleFrameOptions(event.target.value)}
                    className={styles.frame_input}
                  ></input>
                  <datalist id="markers" className={styles.datalist}>
                    <option
                      value="0"
                      label="0"
                      className={styles.datalist_options}
                    ></option>
                    <option
                      value="10"
                      label="S"
                      className={styles.datalist_options}
                    ></option>
                    <option
                      value="20"
                      label="M"
                      className={styles.datalist_options}
                    ></option>
                    <option
                      value="30"
                      label="L"
                      className={styles.datalist_options}
                    ></option>
                    <option
                      value="40"
                      label="XL"
                      className={styles.datalist_options}
                    ></option>
                  </datalist>
                </div>
              </div>
              <div className={styles.image_option_item}>
                <label htmlFor="padding">Largeur du passe-partout</label>
                {/* <input
                  type="checkbox"
                  name="padding"
                  id="padding"
                  onClick={handlePaddingOptions}
                ></input> */}
                <div className={styles.frame_input}>
                  <input
                    type="range"
                    name="padding"
                    id="padding"
                    min="0"
                    max="128"
                    value={inputPaddingValue}
                    step="32"
                    list="markers"
                    onChange={(event) =>
                      handlePaddingOptions(event.target.value)
                    }
                    className={styles.frame_input}
                  ></input>
                  <datalist id="markers" className={styles.datalist}>
                    <option
                      value="0"
                      label="0"
                      className={styles.datalist_options}
                    ></option>
                    <option
                      value="32"
                      label="S"
                      className={styles.datalist_options}
                    ></option>
                    <option
                      value="64"
                      label="M"
                      className={styles.datalist_options}
                    ></option>
                    <option
                      value="96"
                      label="L"
                      className={styles.datalist_options}
                    ></option>
                    <option
                      value="128"
                      label="XL"
                      className={styles.datalist_options}
                    ></option>
                  </datalist>
                </div>
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
