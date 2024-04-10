import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = (props) => {
  return (
    <div>
      {props.latest.map((item, i) => {
        return (
          <>
            <div className={styles.container} key={i}>
              <div className={styles.imgContainer}>
                <Image
                  src={item["img1"]}
                  alt="image"
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.textContainer}>
                <div className={styles.detail}>
                  <span className={styles.date}>12.12.2024-</span>
                  <span className={styles.category}>culture</span>
                </div>
                <Link href={"/"}>
                  <h3>{item["title"]}</h3>
                </Link>
                <p className={styles.desc}>{item["short_des"]}</p>
                <div className={styles.desc} />
                <Link
                  href={`/details?id=${item["id"]}`}
                  className={styles.link}
                >
                  Read More
                </Link>
              </div>
            </div>
          </>
        );
      })}
      {/* <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>

        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>12.12.2024-</span>
            <span className={styles.category}>culture</span>
          </div>
          <Link href={"/"}>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h3>
          </Link>
          <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <div className={styles.desc} />
          <Link href={"/"} className={styles.link}>
            Read More
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
