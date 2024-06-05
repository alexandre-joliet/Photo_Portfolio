import { ImageProps } from "@/utils/types";
import Image from "next/image";
import styles from "./modal.module.css";
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
  const [imageId, setImageId] = useState(0);
  const [url, setUrl] = useState("");
  const [imageNumber, setImageNumber] = useState(images.length);

  useEffect(() => {
    if (selectedImage) {
      setImageShown(selectedImage);
      setUrl(selectedImage.url);
      setImageId(selectedImage.id + 1);
    }
  }, [selectedImage]);

  const handlePreviousImage = () => {
    let id = imageShown.id + 1;
    if (id <= 1) {
      id = 2;
    }
    // console.log(imageId);
    let previousId = imageShown.id - 1;
    if (previousId < 0) {
      previousId = 0;
    }
    const previousImage: ImageProps | any = images.find(
      (item) => item.id === previousId
    );
    setUrl(previousImage.url);
    setImageShown(previousImage);
    setImageId(id - 1);
  };

  const handleNextImage = () => {
    let id = imageShown.id + 1;
    if (id > images.length - 1) {
      id = images.length - 1;
    }

    // console.log(imageId);
    let nextId = imageShown.id + 1;
    if (nextId > images.length - 1) {
      nextId = images.length - 1;
    }
    const nextImage: ImageProps | any = images.find(
      (item) => item.id === nextId
    );
    setUrl(nextImage.url);
    setImageShown(nextImage);
    setImageId(id + 1);
  };

  const handleArrowKeyDown = (event: any) => {
    if (event.key === "ArrowLeft") {
      handlePreviousImage();
    }
    if (event.key === "ArrowRight") {
      handleNextImage();
    }
  };

  // ***** OPTIONS *****
  const [openOptions, setOpenOptions] = useState(false);
  const [coloredButton, setColoredButton] = useState(false);

  const elementRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setOpenOptions(false);
      setColoredButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, []);

  const handleOpenOptions = () => {
    setOpenOptions(!openOptions);
    setColoredButton(!coloredButton);
  };

  const openOptionsContainer = openOptions ? `${styles.open}` : "";
  const setButtonColor = coloredButton ? `${styles.button_opened}` : "";

  const [frameValue, setFrameValue] = useState("");
  const [inputFrameValue, setInputFrameValue] = useState(0);
  const [paddingValue, setPaddingValue] = useState("");
  const [inputPaddingValue, setInputPaddingValue] = useState(0);
  const [frameColorValue, setFrameColorValue] = useState("#000000");

  const handleFrameOptions = (value: any) => {
    setInputFrameValue(value);
    setFrameValue(`${value}px solid ${frameColorValue}`);
  };

  const handlePaddingOptions = (value: any) => {
    setInputPaddingValue(value);
    setPaddingValue(`${value}px`);
  };

  const handleColorOptions = (value: any) => {
    setFrameColorValue(value);
    setFrameValue(`${inputFrameValue}px solid ${frameColorValue}`);
  };

  return (
    <>
      {openModal && (
        <dialog open className={styles.modal_bg} onKeyDown={handleArrowKeyDown}>
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
                boxShadow:
                  "inset 0 0 5px 2px rgba(0, 0, 0, 0.5), var(--shadow-elevation-medium)",
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
              <Image src={nextIcon} alt="Image suivante"></Image>
            </button>
          </div>
          <div className={styles.modal_interaction_container}>
            <p>
              {imageId} / {imageNumber}
            </p>
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
              <div ref={elementRef} className={styles.image_options_container}>
                <button
                  onClick={handleOpenOptions}
                  className={`${styles.modal_button} ${styles.button_option} ${setButtonColor}`}
                >
                  {" "}
                  Options
                </button>
                <div
                  className={`${styles.image_options_content} ${openOptionsContainer}`}
                >
                  <div className={styles.image_option_item}>
                    <label htmlFor="color" className={styles.option_title}>
                      Couleur du cadre
                    </label>
                    <input
                      type="color"
                      name="color"
                      id="color"
                      value={frameColorValue}
                      onChange={(event) =>
                        handleColorOptions(event.target.value)
                      }
                    />
                  </div>
                  <div className={styles.image_option_item}>
                    <label htmlFor="frame" className={styles.option_title}>
                      Largeur du cadre
                    </label>
                    <div className={styles.option_inputs}>
                      <input
                        type="range"
                        name="frame"
                        id="frame"
                        min="0"
                        max="40"
                        value={inputFrameValue}
                        step="10"
                        list="markers"
                        onChange={(event) =>
                          handleFrameOptions(event.target.value)
                        }
                        className={styles.option_inputs}
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
                    <label htmlFor="padding" className={styles.option_title}>
                      Largeur du passe-partout
                    </label>
                    <div className={styles.option_inputs}>
                      <input
                        type="range"
                        name="padding"
                        id="padding"
                        min="0"
                        max="128"
                        value={inputPaddingValue}
                        step="32"
                        list="markers2"
                        onChange={(event) =>
                          handlePaddingOptions(event.target.value)
                        }
                        className={styles.option_inputs}
                      ></input>
                      <datalist id="markers2" className={styles.datalist}>
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
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
