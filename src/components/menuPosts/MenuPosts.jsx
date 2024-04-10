import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = (props) => {
  return (
    <div>
      {props.popular.map((item, i) => {
        return (
          <>
            <div className={styles.items}>
              <Link href={`/details?id=${item["id"]}`} className={styles.item}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item["img1"]}
                    alt=""
                    fill
                    className={styles.image}
                  />
                </div>

                <div className={styles.textContainer}>
                  {/* <span className={`${styles.category} ${styles.travel}`}>
                    Travel
                  </span> */}
                  <h3 className={styles.postTitle}>{item["title"]}</h3>
                  {/* <div className={styles.detail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}> - 10.03.2023</span>
                  </div> */}
                </div>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MenuPosts;
