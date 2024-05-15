import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

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
            <Link href="" className={styles.nav_links}>
              <li className={styles.list_item}>Item</li>
            </Link>
            <Link href="" className={styles.nav_links}>
              <li className={styles.list_item}>Item</li>
            </Link>
            <p className={styles.nav_categories}>Travel</p>
            <Link href="" className={styles.nav_links}>
              <li className={styles.list_item}>Item</li>
            </Link>
            <Link href="" className={styles.nav_links}>
              <li className={styles.list_item}>Item</li>
            </Link>
            <Link href="" className={styles.nav_links}>
              <li className={styles.list_item}>Item</li>
            </Link>
            <p className={styles.nav_categories}>Vehicules</p>
            <Link href="test" className={styles.nav_links}>
              <li className={styles.list_item}>Item</li>
            </Link>
            <ul className={styles.list_folder}>
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
            </ul>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
