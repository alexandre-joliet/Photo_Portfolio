import Link from "next/link";
import styles from "../nav.module.css";
import Image from "next/image";
import { MenuItemsProps } from "@/utils/types";
import expandToggler from "../../../../public/icons/expand_more_black_24dp.svg";
import { useState } from "react";

type AccordionProps = {
  data: MenuItemsProps;
};

const Accordion = ({ data }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleExpandFolder = () => {
    setIsExpanded(!isExpanded);
    setIsToggled(!isToggled);
  };

  const expanded = isExpanded ? `${styles.expanded}` : `${styles.hidden}`;
  const toggled = isToggled ? `${styles.toggled}` : "";

  return (
    <ul className={styles.list_folder}>
      <div
        className={styles.list_folder_container}
        onClick={handleExpandFolder}
      >
        {data.title}
        <button className={`${styles.expand_button} ${toggled}`}>
          <Image src={expandToggler} alt="Dérouler le dossier"></Image>
        </button>
      </div>
      <div className={`${styles.list_folder_content} ${expanded}`}>
        {data.content.map((item: any) => (
          <Link href={item.url} className={styles.nav_links} key={item.title}>
            <li className={styles.list_item}>{item.title}</li>
          </Link>
        ))}
      </div>
    </ul>
  );
};

export default Accordion;
