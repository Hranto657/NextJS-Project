import Image from "next/image";
import styles from "../../styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footer_left}>
          <div className={styles.left_block}>
            <h1>global union buisiness</h1>
            <p>
              Contact our company or visit our address to
              <br /> get answers to all your questions.
            </p>
            <div className={styles.footer_logo}>
              <Image
                src="/images/GUB_logo.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.link_block}>
            <h1>Links</h1>
            <div className={styles.footer_line3} />
            <h2>Home</h2>
            <h2>Services</h2>
            <h2>About services</h2>
            <h2>Contact Us</h2>
            <h2>Gallery</h2>
            <h2>About Us</h2>
          </div>
        </div>

        <div className={styles.right_block}>
          <div className={styles.contacts_mainblock}>
            <h1 className={styles.contacts_header}>Contacts.</h1>
            <div className={styles.footer_line} />
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
              <h2>Global Union Business</h2>
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
              <h2>@gublogistics</h2>
            </div>
          </div>

          <div className={styles.address_mainblock}>
            <h1>Address.</h1>
            <div className={styles.footer_line2} />
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

      <div className={styles.copyright}>
        <p>Copyright ©2022 </p>
      </div>
    </div>
  );
}
