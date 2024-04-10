"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const AppNavBar = (props) => {
  let [keyword, SetKeyword] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href={props.data["socials"][0]["facebook"]}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href={props.data["socials"][0]["twitter"]}>
          <Image src="/twitter.png" alt="twitter" width={24} height={24} />
        </Link>
        <Link href={props.data["socials"][0]["linkedin"]}>
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href={props.data["socials"][0]["youtube"]}>
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </Link>
      </div>
      <div className={styles.logo}>Newblog</div>
      <div className={styles.links}>
        <input
          onChange={(e) => {
            SetKeyword(e.target.value);
          }}
          type="text"
          placeholder="search ..."
          required
        />
        <Link href={keyword === "" ? "/" : `/search?keyword=${keyword}`}>
          <CiSearch />
        </Link>
      </div>

      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        {/* <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link> */}
        {props.isLogin ? (
          <>
            <Link href="/profile" className={styles.link}>
              Profile
            </Link>
            <Link href="/comments" className={styles.link}>
              Comments
            </Link>
            <Link href="/dashboard" className={styles.link}>
              Dashbord
            </Link>
            <Link href="/api/user/login" className={styles.link}>
              Logout
            </Link>
            {/* <div>
              <Image
                src="/p1.jpeg"
                alt=""
                width={40}
                height={50}
                className={styles.userPic}
              />
              <div className={styles.dropdown}>
                <Link href="/user/login" className={styles.droplink}>
                  profile
                </Link>
                <Link href="/user/login" className={styles.droplink}>
                  Dashboard
                </Link>
                <Link href="/user/login" className={styles.droplink}>
                  Logout
                </Link>
              </div>
            </div> */}
          </>
        ) : (
          <>
            <Link href="/user/login" className={styles.link}>
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AppNavBar;
