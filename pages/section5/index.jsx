import Image from "next/image";
import styles from "../../styles/section5.module.scss";
import ReactElasticCarousel from "react-elastic-carousel";

export default function Gallery() {
  const items = [
    { id: 1, title: "/images/carousel1.png" },
    { id: 2, title: "/images/carousel2.png" },
    { id: 3, title: "/images/carousel3.png" },
    { id: 4, title: "/images/carousel4.png" },
    { id: 5, title: "/images/carousel5.png" },
    { id: 6, title: "/images/carousel6.png" },
    { id: 7, title: "/images/carousel7.png" },
    { id: 8, title: "/images/carousel8.png" },
  ];
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
          <h1>Gallery</h1>
        </div>
        <div className={styles.carousel}>
          <ReactElasticCarousel enableAutoPlay autoPlaySpeed={3000}>
            {items.map((item) => {
              return (
                <div key={item.id} className={styles.card}>
                  <Image
                    src={item.title}
                    alt="icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              );
            })}
          </ReactElasticCarousel>
        </div>
      </div>
    </div>
  );
}
