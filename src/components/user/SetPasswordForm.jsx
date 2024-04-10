"use client";

import React, { useState } from "react";
import styles from "./setPasswordForm.module.css";
import SubmitButton from "@/components/master/SubmitButton";
import {
  ErrorToast,
  GetEmail,
  GetOTP,
  IsEmail,
  IsEmpty,
  SetEmail,
  SetOTP,
  SuccessToast,
} from "@/utility/FormHelper";
import { useRouter } from "next/navigation";
const SetPasswordForm = () => {
  let router = useRouter();
  let [data, setData] = useState({
    email: GetEmail(),
    otp: GetOTP(),
    password: "",
  });
  let [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const formSubmit = async () => {
    if (IsEmpty(data.password)) {
      ErrorToast("Password Required!");
    } else {
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      let res = await (
        await fetch(`/api/user/recover/resetPassword`, options)
      ).json();
      setSubmit(false);

      if (res["status"] === "success") {
        SuccessToast("Request Completed");
        sessionStorage.clear();
        router.push("/user/login");
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
            <h4>New Password</h4>
            <input
              value={data.password}
              onChange={(e) => {
                inputOnChange("password", e.target.value);
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

export default SetPasswordForm;
