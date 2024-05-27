"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { menuItems } from "../../../utils/menuItems";
import Accordion from "./Accordion/Accordion";

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  // ***** MENU *****
  const handleOpenMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const openClass = menuIsOpen ? styles.open_nav : "";

  const elementRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.addEventListener("click", handleClickOutside);
    };
  }, []);

  // ***** MENU ITEMS *****
  const normandyBeactRace = menuItems.normandyBeachRace;
  const usMotorShow = menuItems.usMotorShow;

  return (
    <>
      <nav className={`${styles.nav} ${openClass}`} ref={elementRef}>
        <button onClick={handleOpenMenu} className={styles.nav_button}>
          <span className={styles.button_bar}></span>
        </button>
        <div className={`${styles.nav_container} ${openClass}`}>
          <ul className={styles.nav_list}>
            {" "}
            Galeries
            <p className={styles.nav_categories}>Test</p>
            <Link href="/photo/test" className={styles.nav_links}>
              <li className={styles.list_item}>Test fetch</li>
            </Link>
            <p className={styles.nav_categories}>Véhicules</p>
            <Accordion data={normandyBeactRace} />
            <Accordion data={usMotorShow} />
            {/* <ul className={styles.list_folder}>
              Normandy Beach Race
              <Link
                href="/photo/normandy_beach_race21"
                className={styles.nav_links}
              >
                <li className={styles.list_item}>2021</li>
              </Link>
              <Link
                href="/photo/normandy_beach_race23"
                className={styles.nav_links}
              >
                <li className={styles.list_item}>2023</li>
              </Link>
            </ul> */}
            {/* <ul className={styles.list_folder}>
              US Motor Show
              <Link
                href="/photo/us_motor_show22-classic"
                className={styles.nav_links}
              >
                <li className={styles.list_item}>2022 - Classic</li>
              </Link>
              <Link
                href="/photo/us_motor_show22-modern"
                className={styles.nav_links}
              >
                <li className={styles.list_item}>2022 - Modern</li>
              </Link>
            </ul> */}
            <p className={styles.nav_categories}>Voyage</p>
            <Link href="/photo/202304_menorca" className={styles.nav_links}>
              <li className={styles.list_item}>2023.04 - Menorca</li>
            </Link>
            <Link href="/photo/202207_bretagne" className={styles.nav_links}>
              <li className={styles.list_item}>2022.07 - Bretagne</li>
            </Link>
            <Link href="/photo/202106_corse" className={styles.nav_links}>
              <li className={styles.list_item}>2021.06 - Corse</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
