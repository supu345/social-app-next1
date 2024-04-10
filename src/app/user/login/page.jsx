import React from "react";
import PlainLayout from "@/components/master/Plain-Layout";
import LoginForm from "@/components/user/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (typeof token !== "undefined") {
    redirect("/");
  }
  return (
    <PlainLayout>
      <LoginForm />
    </PlainLayout>
  );
};

export default Page;
