import Link from "next/link";
import { ImportAll, blogs } from "../getAllBlog";
import { MONTH, RandomCover } from "../constant";
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
              {!meta.cover && (
                <div className={styles.photographer}>
                  {/* svg Author：池渊 https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=317 */}
                  <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    <path
                      d="M860.414581 207.449017 509.333781 207.449017c0-52.808332-43.003528-95.81186-95.81186-95.81186l-63.817235 0c-52.808332 0-95.81186 43.003528-95.81186 95.81186L158.424996 207.449017c-52.808332 0-95.81186 43.003528-95.81186 95.81186l0 510.53788c0 52.808332 43.003528 95.81186 95.81186 95.81186l701.989585 0c52.808332 0 95.81186-43.003528 95.81186-95.81186L956.22644 303.260877C956.054426 250.452545 913.050899 207.449017 860.414581 207.449017zM509.333781 749.981522c-105.616664 0-191.451705-85.835041-191.451705-191.451705s85.835041-191.451705 191.451705-191.451705 191.451705 85.835041 191.451705 191.451705S614.950445 749.981522 509.333781 749.981522zM812.422644 430.895347c-26.490173 0-47.819923-21.501764-47.819923-47.819923s21.501764-47.819923 47.819923-47.819923c26.490173 0 47.819923 21.501764 47.819923 47.819923S838.912817 430.895347 812.422644 430.895347z"
                      p-id="2755"
                    ></path>
                  </svg>
                  &nbsp;ShineShao
                </div>
              )}

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
