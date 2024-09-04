import { ImageProps } from "@/utils/types";
import Image from "next/image";
import styles from "./modal.module.css";
import closeIcon from "../../../public/icons/close_white_48dp.svg";
import previousIcon from "../../../public/icons/arrow_back_white-24dp.svg";
import nextIcon from "../../../public/icons/arrow_forward_white-24dp.svg";
import { TouchEventHandler, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

    if (!openModal) {
      setImageShown(selectedImage);
      setUrl("");
      setImageId(0);
    }
  }, [selectedImage, openModal]);

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
    setDirection(-1);
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
    setDirection(1);
  };

  const handleArrowKeyDown = (event: any) => {
    if (event.key === "ArrowLeft") {
      handlePreviousImage();
    }
    if (event.key === "ArrowRight") {
      handleNextImage();
    }
  };

  // ***** MOTION FRAMER *****
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  // ***** SWIPE *****
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance to be considered active
  const minSwipeDistance = 50;

  // The type annotation 'TouchEventHandler<HTMLDivElement>' ensures that the function has the correct signature for a touch event handler on an HTML <div> element.
  const handleTouchStart: TouchEventHandler<HTMLDialogElement> = (event) => {
    // Reset the touchEnd value
    setTouchEnd(null);
    // Capture the current start point of touch event with clientX coordinates
    setTouchStart(event.targetTouches[0].clientX);
  };

  const handleTouchMove: TouchEventHandler<HTMLDialogElement> = (event) =>
    // Capture the current point of touch event with clientX coordinates
    setTouchEnd(event.targetTouches[0].clientX);

  // We make the comparison between the two coordinates, check if a right or left swipe and implement the logic here
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNextImage();
    } else if (isRightSwipe) {
      handlePreviousImage();
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
      <AnimatePresence>
        {openModal && (
          <motion.dialog
            open
            className={styles.modal_bg}
            onKeyDown={handleArrowKeyDown}
            key="dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={handleCloseModal}
              className={`${styles.modal_button} ${styles.button_close} ${styles.button_close_mobile} ${styles.hidden_mobile}`}
            >
              <Image src={closeIcon} alt="Fermer"></Image>
            </button>
            <motion.div
              className={styles.modal_image_container}
              key={url}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 40 },
                opacity: { duration: 0.2 },
              }}
            >
              <Image
                src={url}
                width={2048}
                height={1024}
                alt=""
                className={`${styles.modal_image}`}
                sizes="(max-width: 1440px) 100vw, 80vw"
                style={{
                  border: frameValue,
                  padding: paddingValue,
                  boxShadow:
                    "inset 0 0 5px 2px rgba(0, 0, 0, 0.5), var(--shadow-elevation-medium)",
                }}
              ></Image>
            </motion.div>
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
                <div
                  ref={elementRef}
                  className={styles.image_options_container}
                >
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
          </motion.dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
