import Link from "next/link";
import { ImportAll, blogs } from "../getAllBlog";
import { MONTH } from "@constant";
import Photographer from "@components/Photographer";
import styles from "./Blog.module.scss";

export default function IndexPage() {
  return (
    <div className={styles.Blog}>
      {blogs.map(({ link, module: { meta } }: ImportAll, index: number) => {
        const date = meta.date.split("-");
        let month = "";

        try {
          month = MONTH[+date[1] - 1];
        } catch (error) {}

        return (
          <div className={styles.BlogItem} key={link}>
            <div className={styles.coverWrapper}>
              <div
                className={styles.cover}
                style={{
                  backgroundImage: `url(${meta.cover})`
                }}
              />
              <div className={styles.coverBg} />
              <Photographer cover={meta.cover} />
              <div className={styles.dateWrapper}>
                <span className={styles.date}>
                  <span className={styles.dateDay}>{date[2] || ""}</span>
                  <span className={styles.dateMonth}>{month}</span>
                </span>
              </div>
            </div>
            <div className={styles.info}>
              <Link href={"/blog" + link}>
                <a>
                  <h2 className="">{meta.title}</h2>
                </a>
              </Link>
              <p>{meta.description}</p>
              <p>{meta.date} 😄</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
