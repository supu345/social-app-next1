import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {props.data["categories"].map((item, i) => {
          return (
            <Link
              href={`/category?id=${item["id"]}`}
              className={`${styles.category} ${styles.style}`}
              key={i}
            >
              <Image
                src={item["image"]}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
              {item["name"]}
            </Link>
          );
        })}
        {/* <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link> */}
        {/* <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Fashion
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.culture}`}>
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          culture
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          travel
        </Link> */}
      </div>
    </div>
  );
};

export default CategoryList;
