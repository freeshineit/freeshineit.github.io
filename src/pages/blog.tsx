import { useState, useMemo, useCallback } from "react";
import cls from "classnames";
import Link from "next/link";
import { ImportAll, blogs } from "../getAllBlog";
import { MONTH } from "@constant";
import Photographer from "@shared/Photographer";
import styles from "./Blog.module.scss";

const limit = 7;

export default function IndexPage() {
  const [page, setPage] = useState(0);

  const pages = useMemo<Array<ImportAll[]>>(() => {
    const len = Array.from(blogs as ImportAll[]).length;
    let arr: Array<ImportAll[]> = [];
    for (let i = 0; i < len; ) {
      arr.push(blogs.slice(i, (i = i + limit)));
    }
    return arr;
  }, []);

  const handlePrePage = useCallback(() => {
    if (page > 0) {
      setPage(page - 1);
      window?.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
      });
    }
  }, [page]);
  const handleNextPage = useCallback(() => {
    if (page < pages.length - 1) {
      setPage(page + 1);
      window?.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
      });
    }
  }, [page]);

  return (
    <div className={styles.Blog}>
      {pages[page].map(({ link, module: { meta } }: ImportAll) => {
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
      {/* page */}
      <div className={styles.page}>
        <a
          href="javascript:;"
          className={cls({ [styles.disable]: page === 0 })}
          onClick={handlePrePage}
        >
          上一页
        </a>
        <a
          href="javascript:;"
          className={cls({ [styles.disable]: page === pages.length - 1 })}
          onClick={handleNextPage}
        >
          下一页
        </a>
      </div>
    </div>
  );
}
