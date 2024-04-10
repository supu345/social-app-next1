import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import PlainLayout from "@/components/master/Plain-Layout";

async function getData() {
  let Slider = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`)).json()
  )["data"];
  let Featured = (
    await (
      await fetch(`${process.env.HOST}/api/news/type?type=Featured`)
    ).json()
  )["data"];
  let Popular = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json()
  )["data"];
  let Latest = (
    await (await fetch(`${process.env.HOST}/api/news/latest`)).json()
  )["data"];
  let categories = (
    await (await fetch(`${process.env.HOST}/api/category`)).json()
  )["data"];
  return {
    Slider: Slider,
    Featured: Featured,
    Popular: Popular,
    Latest: Latest,
    categories: categories,
  };
}
const page = async () => {
  const data = await getData();
  return (
    <PlainLayout>
      <Featured featured={data["Featured"]} slider={data["Slider"]} />
      <CategoryList data={data} />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </PlainLayout>
    //   <div className={styles.container}>
    //     <Featured />
    //     <CategoryList />
    //     <div className={styles.content}>
    //       <CardList />
    //       <Menu />
    //     </div>
    //   </div>
  );
};

export default page;
