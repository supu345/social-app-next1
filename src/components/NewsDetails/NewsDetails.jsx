import React from "react";

import Menu from "../Menu/Menu";
import styles from "./newsdetails.module.css";
import Image from "next/image";
import parse from "html-react-parser";
const NewsDetails = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{props.details["title"]}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={props.details["img1"]}
                alt="image"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>name</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={props.details["img1"]}
            alt="image"
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            {parse(props.details["long_des"])}
          </div>
          <div>
            <h3>Comments</h3>
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default NewsDetails;
