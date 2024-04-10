"use client";

import React, { useState } from "react";
import styles from "./loginForm.module.css";

import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SetOTP,
  SuccessToast,
} from "@/utility/FormHelper";
import Link from "next/link";
import SubmitButton from "../master/SubmitButton";

const LoginForm = () => {
  let [data, setData] = useState({ email: "", password: "" });
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
    }
    if (IsEmpty(data.password)) {
      ErrorToast("Valid Password Required!");
    } else {
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      let res = await (await fetch("/api/user/login", options)).json();
      setSubmit(false);
      setData({ email: "", password: "" });

      if (res["status"] === "success") {
        SuccessToast("Request Completed");
        window.location.href = "/";
      } else {
        ErrorToast("Invalid Request");
      }
    }
  };

  return (
    <div className={styles.login}>
      <img src="/p1.jpeg" alt="login" className={styles.login_decor} />
      <div className={styles.login_content}>
        <form className={styles.login_content_form}>
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={data.email}
            onChange={(e) => {
              inputOnChange("email", e.target.value);
            }}
            required
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={data.password}
            onChange={(e) => {
              inputOnChange("password", e.target.value);
            }}
            required
          />

          <SubmitButton onClick={formSubmit} submit={submit} text="Login" />
          {/* <button type="submit" onClick={formSubmit}>
            Log In
          </button> */}
          <Link href="/user/registration">
            <p>Sign Up </p>
          </Link>

          <Link href="/user/emailVerify" className="">
            <p>Forget Password </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
