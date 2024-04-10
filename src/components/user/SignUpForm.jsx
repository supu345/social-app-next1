"use client";
import React, { useState } from "react";
import styles from "./signUpForm.module.css";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import { useRouter } from "next/navigation";
import SubmitButton from "../master/SubmitButton";

const SignUpForm = () => {
  let [data, setData] = useState({ email: "", password: "" });
  let [submit, setSubmit] = useState(false);
  let router = useRouter();

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async () => {
    if (IsEmpty(data.firstName)) {
      ErrorToast("First Name Required!");
    } else if (IsEmpty(data.lastName)) {
      ErrorToast("Last Name Required!");
    } else if (IsEmpty(data.email)) {
      ErrorToast("Email Address Required!");
    } else if (IsEmpty(data.mobile)) {
      ErrorToast("Mobile No Required!");
    } else if (IsEmpty(data.password)) {
      ErrorToast("Password Required!");
    } else {
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };

      let res = await (await fetch("/api/user/registration", options)).json();
      setSubmit(false);

      if (res["status"] === "success") {
        SuccessToast("Request Success");
        router.push("/user/login");
      } else {
        ErrorToast("Invalid Request ! ");
      }
    }
  };

  return (
    <div className={styles.register}>
      <img src="/p1.jpeg" alt="register" className={styles.register_decor} />
      <div className={styles.register_content}>
        <form className={styles.register_content_form}>
          <input
            value={data.firstName}
            onChange={(e) => {
              inputOnChange("firstName", e.target.value);
            }}
            placeholder="FirstName"
            type="text"
            required
          />
          <input
            value={data.lastName}
            onChange={(e) => {
              inputOnChange("lastName", e.target.value);
            }}
            placeholder="LastName"
            type="text"
            required
          />
          <input
            value={data.mobile}
            onChange={(e) => {
              inputOnChange("mobile", e.target.value);
            }}
            placeholder="Mobile"
            type="mobile"
            name="confirmPassword"
            required
          />

          <input
            value={data.email}
            onChange={(e) => {
              inputOnChange("email", e.target.value);
            }}
            placeholder="Email"
            type="email"
            required
          />
          <input
            value={data.password}
            onChange={(e) => {
              inputOnChange("password", e.target.value);
            }}
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <SubmitButton submit={submit} onClick={formSubmit} text="Sign Up" />
          {/* <button onClick={formSubmit} type={submit} text="Sign up">
            Sign up
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
