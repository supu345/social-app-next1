import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

async function getData() {
  let Popular = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json()
  )["data"];
  let categories = (
    await (await fetch(`${process.env.HOST}/api/category`)).json()
  )["data"];
  return {
    Popular: Popular,
    categories: categories,
  };
}
const Menu = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} popular={data["Popular"]} data={data} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories data={data} />
    </div>
  );
};

export default Menu;
