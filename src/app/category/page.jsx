import React from "react";
import PlainLayout from "@/components/master/Plain-Layout";
import Card from "@/components/card/Card";
import styles from "./category.module.css";
import Menu from "@/components/Menu/Menu";

async function getData(id) {
  let News = (
    await (
      await fetch(`${process.env.HOST}/api/news/category?catID=${id}`)
    ).json()
  )["data"];
  let Popular = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json()
  )["data"];
  return { News: News, Popular: Popular };
}

const Page = async (props) => {
  let id = props.searchParams["id"];
  const data = await getData(id);
  return (
    <PlainLayout>
      <div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.posts}>
              <Card latest={data["News"]} />
            </div>
            <Menu popular={data["Popular"]} />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default Page;
