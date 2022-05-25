import Image from "next/image";
import styles from "../../styles/section3.module.scss";

export default function AboutServices() {
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
          <h1>About Services</h1>
        </div>
        <div className={styles.block_text}>
          <div className={styles.block}>
            <h1>Land Freight</h1>
            <div className={styles.block_about}>
              <div className={styles.imageblock}>
                <Image
                  src="/images/listicon.svg"
                  alt="list icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p>
                in many supply chains, especially across the US, land freight is
                the be-all, end-all mode of transport connecting all of the dots
                between products and consumers. At the very least, land
                transport acts as the anchor leg in a supply chain relay race.
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <h1>Transfer by plane</h1>
            <div className={styles.block_about}>
              <div className={styles.imageblock}>
                <Image
                  src="/images/listicon.svg"
                  alt="list icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p>
                Air freight is another term for air cargo that is, the shipment
                of goods through an air carrier. Air transport services are the
                most valuable when it comes to moving express shipments around
                the globe. Just like the commercial or passenger airlines, air
                freight flies in the same gateways.
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <h1>Transportation by boat</h1>
            <div className={styles.block_about}>
              <div className={styles.imageblock}>
                <Image
                  src="/images/listicon.svg"
                  alt="list icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p>
                A cargo ship or freighter is a merchant ship that carries cargo,
                goods, and materials from one port to another. Thousands of
                cargo carriers ply the world`s seas and oceans each year,
                handling the bulk of international trade.
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <h1>Auto Transportation</h1>
            <div className={styles.block_about}>
              <div className={styles.imageblock}>
                <Image
                  src="/images/listicon.svg"
                  alt="list icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p>
                Auto Transportation, also known as vehicle shipping or car
                shipping, is a service that aids people in moving their vehicles
                from one location to another on a truck designed to transport
                vehicles by auto transport companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
