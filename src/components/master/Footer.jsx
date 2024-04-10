import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Subscribe from "../news/Subscribe";

const Footer = (props) => {
  return (
    <div className={styles.container}>
      <div>
        {/* <div className={styles.logo}>
          <Image src="/twitter.png" alt="blog" width={50} height={50} />
          <h1 className={styles.logoText}>Newblog</h1>
        </div> */}
      </div>
      <div className={styles.info}>
        <p className={styles.desc}>
          <h1 className={styles.logoText}>About Us</h1>
          <p>{props.data["socials"][0]["about"]}</p>
        </p>
        <div className={styles.icons}>
          <Link href={props.data["socials"][0]["facebook"]}>
            <Image src="/facebook.png" alt="" width={18} height={18} />
          </Link>
          <Link href={props.data["socials"][0]["twitter"]}>
            <Image src="/twitter.png" alt="" width={18} height={18} />
          </Link>
          <Link href={props.data["socials"][0]["linkedin"]}>
            <Image src="/linkedin.png" alt="" width={18} height={18} />
          </Link>
          <Link href={props.data["socials"][0]["youtube"]}>
            <Image src="/youtube.png" alt="" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>

          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          {props.data["categories"].map((item, i) => {
            if (i < 4) {
              return (
                <Link
                  key={i}
                  className="nav-link text-white my-1"
                  href={`/category?id=${item["id"]}`}
                >
                  {item["name"]}
                </Link>
              );
            }
          })}
        </div>
        {/* <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div> */}

        <div>
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default Footer;
