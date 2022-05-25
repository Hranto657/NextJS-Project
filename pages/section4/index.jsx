import Image from "next/image";
import styles from "../../styles/section4.module.scss";

export default function ContactUs() {
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
          <h1>Contact Us</h1>
        </div>
        <div className={styles.container_block}>
          <div className={styles.container_img}>
            <Image
              src="/images/Container.png"
              alt="container"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles.inf_mainblock}>
            <div className={styles.contacts_mainblock}>
              <h1 className={styles.contacts_header}>Contacts.</h1>
              <div className={styles.contacts_block}>
                <div className={styles.contact_icon}>
                  <Image
                    src="/images/phoneicon.svg"
                    alt="phone icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h2>298-453-887</h2>
              </div>
              <div className={styles.contacts_block}>
                <div className={styles.contact_icon}>
                  <Image
                    src="/images/mailicon.svg"
                    alt="mail icon"
                    layout="fill"
                    objectFit="contain"
                  />
                  <h4>gublogistics@gmail.com</h4>
                </div>
              </div>
              <div className={styles.contacts_block}>
                <div className={styles.contact_icon}>
                  <Image
                    src="/images/facebookicon.svg"
                    alt="facebook icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p>Global Union Business</p>
              </div>
              <div className={styles.contacts_block}>
                <div className={styles.contact_icon}>
                  <Image
                    src="/images/instagramicon.svg"
                    alt="instagram icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3>@gublogistics</h3>
              </div>
            </div>
            <div className={styles.address_mainblock}>
              <h1>Address.</h1>
              <div className={styles.address_block}>
                <div className={styles.contact_icon}>
                  <Image
                    src="/images/locationicon.svg"
                    alt="location icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h2>Barkeley Street CA 3207.</h2>
              </div>
              <button className={styles.addressblock_btn}>Go to map</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
