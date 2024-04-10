"use client";
import React, { useState } from "react";
import SubmitButton from "@/components/master/SubmitButton";
import styles from "./PinVerifyForm.module.css";
import {
  ErrorToast,
  GetEmail,
  IsEmail,
  IsEmpty,
  SetEmail,
  SetOTP,
  SuccessToast,
} from "@/utility/FormHelper";
import { useRouter } from "next/navigation";

const PinVerifyForm = () => {
  let router = useRouter();
  let [data, setData] = useState({ email: GetEmail(), otp: "" });
  let [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async () => {
    if (IsEmpty(data.otp)) {
      ErrorToast("Valid PIN Required!");
    } else {
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      let res = await (
        await fetch(`/api/user/recover/verifyOTP`, options)
      ).json();
      setSubmit(false);

      if (res["status"] === "success") {
        SuccessToast("Request Completed");
        SetOTP(data.otp);
        router.push("/user/resetPassword");
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
            <h4 className="mb-3">Verification PIN</h4>
            <input
              value={data.otp}
              onChange={(e) => {
                inputOnChange("otp", e.target.value);
              }}
              placeholder="XXXXX"
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

export default PinVerifyForm;
