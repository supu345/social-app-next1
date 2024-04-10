import React from "react";
import AppNavBar from "./AppNavBar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";

async function getData() {
  let socials = (await (await fetch(`${process.env.HOST}/api/social`)).json())[
    "data"
  ];
  let categories = (
    await (await fetch(`${process.env.HOST}/api/category`)).json()
  )["data"];
  return { socials: socials, categories: categories };
}

const PlainLayout = async (props) => {
  const data = await getData();

  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isLogin = false;
  isLogin = typeof token !== "undefined";

  return (
    <>
      <AppNavBar isLogin={isLogin} data={data} />
      {props.children}
      <Toaster position="botton-center" />
      <Footer data={data} />
    </>
  );
};

export default PlainLayout;
