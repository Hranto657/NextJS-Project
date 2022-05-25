import styles from "../../styles/header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.image_container}>
        <Image
          src="/images/pngwing 2.png"
          alt="header photo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.textblock}>
        <h1>
          Perfect company
          <br /> with perfect solutions.
        </h1>
        <h2>
          Professional and certificates transportation and
          <br /> logistics services.
        </h2>
        <button className={styles.textblock_btn}>Go to map</button>
      </div>
    </div>
  );
}
