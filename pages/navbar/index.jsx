import Image from "next/image";
import React from "react";
import styles from "../../styles/navbar.module.scss";

export default function NavBar() {
  const [state, setState] = React.useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/GUB_logo.png"
          layout="fill"
          objectFit="contain"
          alt="logo"
        />
      </div>
      <div className={styles.menu}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a>services</a>
          </li>
          <li>
            <a>contact us</a>
          </li>
          <li>
            <a>gallery</a>
          </li>
          <li>
            <a>about us</a>
          </li>
        </ul>
        <button className={styles.btn}>298-453-887</button>
      </div>
      <div
        className={state == true ? styles.dropdown_inactive : styles.menubtn}
        onClick={() => setState(true)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className={
          state == true ? `${styles.dropdown_active}` : styles.dropdown
        }
      >
        <ul className={styles.dropdown_menu}>
          <li>
            <a>services</a>
          </li>
          <li>
            <a>contact us</a>
          </li>
          <li>
            <a>gallery</a>
          </li>
          <li>
            <a>about us</a>
          </li>
        </ul>
        <button className={styles.dropdown_btn}>298-453-887</button>
        <div className={styles.cancel_btn}>
          <Image
            src="/images/cancel.png"
            alt="X"
            layout="fill"
            objectFit="contain"
            onClick={() => setState(false)}
          />
        </div>
      </div>
    </nav>
  );
}
