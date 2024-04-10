import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuCategories = async (props) => {
  return (
    <div>
      {props.data["categories"].map((item, i) => {
        return (
          <>
            <Link
              href={`/category?id=${item["id"]}`}
              className={`${styles.category} ${styles.style}`}
              key={i}
            >
              {item["name"]}
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default MenuCategories;
