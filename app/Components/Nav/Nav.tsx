"use client";
import Link from "next/link";
import styles from "./nav.module.css";
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
  const normandyBeachRace = menuItems.normandyBeachRace;
  const usMotorShow = menuItems.usMotorShow;
  const leMans24h = menuItems.leMans24h;

  return (
    <>
      <nav className={`${styles.nav} ${openClass}`} ref={elementRef}>
        <button onClick={handleOpenMenu} className={styles.nav_button}>
          <span className={styles.button_bar}></span>
        </button>
        <div className={`${styles.nav_container} ${openClass}`}>
          <Link href="/" className={styles.nav_section}>
            Accueil
          </Link>
          <Link href="/contact" className={styles.nav_section}>
            Bio / Contact
          </Link>
          <p className={styles.nav_section}>Galeries</p>
          <ul className={styles.nav_list}>
            {/* Galeries */}
            {/* <p className={styles.nav_categories}>Test</p>
            <Link href="/photo/test" className={styles.nav_links}>
              <li className={styles.list_item}>Test fetch</li>
            </Link> */}
            <Link href="/photo/Animaux/" className={styles.nav_categories}>
              Animaux
            </Link>
            <Link href="/photo/Animaux/chaussette" className={styles.nav_links}>
              <li className={styles.list_item}>Chaussette</li>
            </Link>
            <Link
              href="/photo/Animaux/vallee-des-singes_2024"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>La Vallée des Singes</li>
            </Link>
            <Link href="/photo/Portraits/" className={styles.nav_categories}>
              Portraits
            </Link>
            <Link
              href="/photo/Portraits/portraits_mariana-sunflowers"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>Mariana - Sunflowers</li>
            </Link>
            <Link href="/photo/Vehicules/" className={styles.nav_categories}>
              Véhicules
            </Link>
            <Accordion data={leMans24h} />
            <Accordion data={normandyBeachRace} />
            <Accordion data={usMotorShow} />
            <Link href="/photo/Voyage/" className={styles.nav_categories}>
              Voyage
            </Link>
            <Link
              href="/photo/Voyage/202304_menorca"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>2023.04 - Menorca</li>
            </Link>
            <Link
              href="/photo/Voyage/202207_bretagne"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>2022.07 - Bretagne</li>
            </Link>
            <Link
              href="/photo/Voyage/202106_corse"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>2021.06 - Corse</li>
            </Link>
            <Link
              href="/photo/Voyage/202003_srilanka"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>2020.03 - Sri Lanka</li>
            </Link>
            {/* <Link href="/photo/201911_lisboa" className={styles.nav_links}>
              <li className={styles.list_item}>2019.11 - Lisboa</li>
            </Link> */}
            <Link
              href="/photo/Voyage/201907_lozere"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>2019.07 - Lozère & Vercors</li>
            </Link>
            <Link href="/photo/Voyage/201810_bali" className={styles.nav_links}>
              <li className={styles.list_item}>2018.10 - Bali</li>
            </Link>
            <Link
              href="/photo/Voyage/201805_venise"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>2018.05 - Venise</li>
            </Link>
            <Link href="/photo/Voyage/201710_bali" className={styles.nav_links}>
              <li className={styles.list_item}>2017.10 - Bali</li>
            </Link>
            <Link
              href="/photo/Voyage/201701_abudhabi"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>2017.01 - Abu Dhabi</li>
            </Link>
            <Link
              href="/photo/Voyage/201701_dubai"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>2017.01 - Dubaï</li>
            </Link>
            <Link
              href="/photo/Voyage/201701_dubaimarina"
              className={styles.nav_links}
            >
              <li className={styles.list_item}>
                2017.01 - Dubaï Marina by Night
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
