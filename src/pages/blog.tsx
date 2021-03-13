import Link from "next/link";
import { ImportAll, blogs } from "../getAllBlog";
import styles from "./Blog.module.scss";

export default function IndexPage() {
  return (
    <div className={styles.Blog}>
      {blogs.map(({ link, module: { meta } }: ImportAll) => (
        <div className={styles.BlogItem} key={link}>
          <h2 className="">{meta.title}</h2>
          <p>{meta.description}</p>
          <p>{meta.date} 😄</p>
          <Link href={"/blog" + link}>
            <a>Read more &rarr;</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
