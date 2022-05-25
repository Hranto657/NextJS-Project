import Image from "next/image";
import styles from "../../styles/section1.module.scss";

export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.mainblock}>
        <div className={styles.block_header}>
          <div className={styles.image_icon}>
            <Image
              src="/images/icon.svg"
              alt="icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1>Services</h1>
        </div>
        <div className={styles.imageblock}>
          <div className={styles.block}>
            <div className={styles.image_container}>
              <Image
                src="/images/s1image4.png"
                alt="service photo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1>Land Freight.</h1>
          </div>
          <div className={styles.block}>
            <div className={styles.image_container}>
              <Image
                src="/images/s1image3.png"
                alt="service photo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1>Transfer by plane.</h1>
          </div>
          <div className={styles.block}>
            <div className={styles.image_container}>
              <Image
                src="/images/s1image2.png"
                alt="service photo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1>Boat transportation. </h1>
          </div>
          <div className={styles.block}>
            <div className={styles.image_container}>
              <Image
                src="/images/s1image1.png"
                alt="service photo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1>Auto Transportation.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
