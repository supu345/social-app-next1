"use client";

import React, { useState } from "react";
import styles from "./subscribe.module.css";
import SubmitButton from "../master/SubmitButton";
import { ErrorToast, IsEmail, SuccessToast } from "@/utility/FormHelper";

const Subscribe = () => {
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
      const options = { method: "POST", body: JSON.stringify(data) };
      let res = await (await fetch("/api/subscriber", options)).json();
      setSubmit(false);
      setData({ email: "" });

      res["status"] === "success"
        ? SuccessToast("Request Success")
        : ErrorToast("Email Already Used ! ");
    }
  };
  return (
    <div className={styles.newsletter}>
      <h3>News Letter</h3>
      <hr />
      <p>Enter your Email</p>
      <form>
        <input
          value={data.email}
          onChange={(e) => {
            inputOnChange("email", e.target.value);
          }}
          type="text"
          placeholder="Email Address"
          required
        />
        <br />
        <SubmitButton onClick={formSubmit} submit={submit} text="Submit" />

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};

export default Subscribe;
