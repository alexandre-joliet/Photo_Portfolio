"use client";
import styles from "./header.module.css";
import Nav from "../Nav/Nav";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_title_wrapper}>
          <Link href="/">
            <h1 className={styles.header_title}>Alexandre Joliet</h1>
          </Link>
          <h2 className={styles.header_subtitle}>Photographies</h2>
        </div>
      </header>
      <Nav />
    </>
  );
};

export default Header;
