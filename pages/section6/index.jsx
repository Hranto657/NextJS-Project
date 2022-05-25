import Image from "next/image";
import styles from "../../styles/section6.module.scss";

export default function AboutUs() {
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
          <h1>About Us</h1>
        </div>
        <div className={styles.text_block}>
          <div className={styles.left_block}>
            <p>
              Global Union Bussines will raise the standard of excellence in the
              transportation logistics services industry by providing a one-stop
              solution to our clients for all their transportation needs in a
              supply chain process while simultaneously preserving the
              efficiency of specialty units.
              <br />
              <br />
            </p>
            <p>
              Blobal Union Bussines will strive to create mutually beneficial
              relationships with our clients, partners, agents and employees
              while conducting corporate activities in a quality manner and
              holding ourselves up to the highest professional standards.
            </p>
          </div>
          <div className={styles.right_block}>
            <div className={styles.about_img}>
              <Image
                src="/images/aboutus.png"
                alt="aboutUs image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
