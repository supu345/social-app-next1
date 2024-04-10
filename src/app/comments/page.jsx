import PlainLayout from "@/components/master/Plain-Layout";
import React from "react";
import { cookies } from "next/headers";
import UserCommentsList from "@/components/comments/UserCommentsList";

async function getData(cookies) {
  let option = {
    method: "GET",
    headers: { Cookie: cookies },
    cache: "no-store",
  };
  let Comments = (
    await (
      await fetch(`${process.env.HOST}/api/comments/manage`, option)
    ).json()
  )["data"];
  return { Comments: Comments };
}

const page = async () => {
  const cookieStore = cookies();
  let data = await getData(cookieStore);
  return (
    <PlainLayout>
      <UserCommentsList data={data["Comments"]} />
    </PlainLayout>
  );
};

export default page;
