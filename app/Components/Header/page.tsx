import Link from "next/link";
import styles from "./page.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Alexandre Joliet</h1>
      <h2 className={styles.header_subtitle}>Photo Portfolio</h2>
      <nav className={styles.header_nav}>
        <ul className={styles.nav_list}>
          <h3 className={styles.nav_categories}>Categorie</h3>
          <Link href="" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>
          <Link href="" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>
          <Link href="" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>
          <h3 className={styles.nav_categories}>Categorie</h3>
          <Link href="" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>
          <Link href="" className={styles.nav_links}>
            <li className={styles.list_item}>Item</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
