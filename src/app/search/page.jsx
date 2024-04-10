import Menu from "@/components/Menu/Menu";
import Card from "@/components/card/Card";
import PlainLayout from "@/components/master/Plain-Layout";
import styles from "./search.module.css";

async function getData(keyword) {
  let News = (
    await (
      await fetch(`${process.env.HOST}/api/news/search?keyword=${keyword}`)
    ).json()
  )["data"];
  let Popular = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json()
  )["data"];
  return { News: News, Popular: Popular };
}

const page = async (props) => {
  let keyword = props.searchParams["keyword"];
  const data = await getData(keyword);
  return (
    <PlainLayout>
      <div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.posts}>
              <Card latest={data["News"]} />
            </div>
            <Menu popular={data["Popular"]} />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default page;
