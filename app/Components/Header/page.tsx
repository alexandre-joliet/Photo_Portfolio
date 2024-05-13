"use client";
import Link from "next/link";
import styles from "./page.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header_title}>
        Alexandre <br />
        Joliet
      </p>
      <Link href="/" className={styles.header_link}>
        <h2 className={styles.header_subtitle}>Photo Portfolio</h2>
      </Link>
      <nav className={styles.header_nav}>
        <ul className={styles.nav_list}>
          <h3 className={styles.nav_categories}>Test</h3>
          <Link href="/photo/test" className={styles.nav_links}>
            <li className={styles.list_item}>Test fetch</li>
          </Link>
          <Link href="" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>
          <Link href="" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>

          <h3 className={styles.nav_categories}>Travel</h3>
          <Link href="" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>
          <Link href="" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>
          <Link href="" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>

          <h3 className={styles.nav_categories}>Vehicules</h3>
          <Link href="test" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>
          <li className={styles.list_item}>
            US Motor Show
            <ul>
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
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
