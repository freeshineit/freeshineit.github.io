import { IMeta } from "src/@types";
import MDXHead from "../MDXHead";
import Cover from "@components/Cover";
import styles from "./Content.module.scss";

interface IMDXContentProps {
  children: any;
  meta: IMeta;
}

function MDXContent({ children, meta }: IMDXContentProps) {
  return (
    <>
      <MDXHead meta={meta} />
      <div className={styles.content}>
        <Cover meta={meta} />
        <h1 className={styles.title}>{meta.title}</h1>
        <article>{children}</article>
      </div>
    </>
  );
}

export default MDXContent;
