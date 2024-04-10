import React from "react";
import PlainLayout from "@/components/master/Plain-Layout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SignUpForm from "@/components/user/SignUpForm";
const Page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (typeof token !== "undefined") {
    redirect("/");
  }

  return (
    <PlainLayout>
      <SignUpForm />
    </PlainLayout>
  );
};

export default Page;
