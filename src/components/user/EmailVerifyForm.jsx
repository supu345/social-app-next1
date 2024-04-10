"use client";

import React, { useState } from "react";
import styles from "./emailVerifyForm.module.css";
import SubmitButton from "../master/SubmitButton";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SetEmail,
  SuccessToast,
} from "@/utility/FormHelper";
import { useRouter } from "next/navigation";

const EmailVerifyForm = () => {
  let router = useRouter();
  let [data, setData] = useState({ email: "" });
  let [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async () => {
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required!");
    } else {
      setSubmit(true);
      let res = await (
        await fetch(`/api/user/recover/verifyEmail?email=${data.email}`)
      ).json();
      setSubmit(false);

      if (res["status"] === "success") {
        SuccessToast("Request Completed");
        SetEmail(data.email);
        router.push("/user/otpVerify");
      } else {
        ErrorToast("Invalid Request");
      }
    }
  };
  return (
    <div>
      <div className={styles.login}>
        <img src="/p1.jpeg" alt="login" className={styles.login_decor} />
        <div className={styles.login_content}>
          <form className={styles.login_content_form}>
            <h4>Email Address</h4>
            <input
              value={data.email}
              onChange={(e) => {
                inputOnChange("email", e.target.value);
              }}
              placeholder="Email"
              name="email"
              type="email"
              required
            />

            <SubmitButton onClick={formSubmit} submit={submit} text="Next" />
            {/* <button type="submit" onClick={formSubmit}>
            Log In
          </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifyForm;
