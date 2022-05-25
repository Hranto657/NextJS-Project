import Image from "next/image";
import styles from "../../styles/section2.module.scss";

export default function Shipping() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.image}>
          <Image
            src="/images/pngwing 5.png"
            alt="photo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.text_block}>
          <h1>We work fast and efficiently.</h1>
          <div className={styles.line_horizontal}></div>
          <div className={styles.todo_block}>
            <div className={styles.todo_image}>
              <Image
                src="/images/todolist.svg"
                alt="todolist icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.line_vertical}></div>
            <div className={styles.todo_text}>
              <h2>A smart way of shipping.</h2>
              <h3>Get the Shipping done on time.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
