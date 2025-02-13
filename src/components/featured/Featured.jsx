"use client";
import React, { useState } from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={styles.container}>
      {props.slider.map((item, i) => {
        return (
          <>
            <h1 className={styles.title}>{item["title"]}</h1>

            <div className={styles.post}>
              <div className={styles.imgContainer}>
                <Image
                  src={item["img1"]}
                  alt=""
                  className={styles.image}
                  fill
                />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.postTitle}>{item["short_des"]}</h3>
                <p className={styles.postDesc}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate, quam nisi magni ea laborum inventore voluptatum
                  laudantium repellat ducimus unde aspernatur fuga. Quo,
                  accusantium quisquam! Harum unde sit culpa debitis.
                </p>
              </div>
            </div>
          </>
        );
      })}

      {/* <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" className={styles.image} fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>

          <button className={styles.button}>Read More</button>
        </div>
      </div> */}
    </div>
  );
};

export default Featured;
