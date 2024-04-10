import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import Image from "next/image";

async function getData() {
  let Popular = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json()
  )["data"];
  let Latest = (
    await (await fetch(`${process.env.HOST}/api/news/latest`)).json()
  )["data"];

  return {
    Popular: Popular,
    Latest: Latest,
  };
}

const CardList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card latest={data["Latest"]} />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
