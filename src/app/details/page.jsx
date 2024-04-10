import PlainLayout from "@/components/master/Plain-Layout";
import React from "react";
import styles from "./details.module.css";
import NewsDetails from "@/components/NewsDetails/NewsDetails";
import CommentsList from "@/components/news/CommentsList";

async function getData(id) {
  let Details = (
    await (await fetch(`${process.env.HOST}/api/news/details?id=${id}`)).json()
  )["data"];
  let Popular = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json()
  )["data"];
  let Comments = (
    await (
      await fetch(`${process.env.HOST}/api/comments/news?postID=${id}`, {
        cache: "no-store",
      })
    ).json()
  )["data"];

  return { Details: Details, Popular: Popular, Comments: Comments };
}
const page = async (props) => {
  let id = props.searchParams["id"];
  const data = await getData(id);
  return (
    <PlainLayout>
      <div>
        <NewsDetails details={data["Details"]} />
        <CommentsList postID={id} data={data["Comments"]} />
      </div>
    </PlainLayout>
  );
};

export default page;
