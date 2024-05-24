"use client";
import Link from "next/link";
import styles from "./page.module.css";
import Nav from "../Nav/page";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_title_wrapper}>
        <h1 className={styles.header_title}>Alexandre Joliet</h1>
        <h2 className={styles.header_subtitle}>Photographies</h2>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
