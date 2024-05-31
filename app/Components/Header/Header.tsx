"use client";
import styles from "./header.module.css";
import Nav from "../Nav/Nav";

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
