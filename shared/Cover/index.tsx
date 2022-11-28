import { useMemo } from "react";
import { MONTH } from "@constant";
import Photographer from "@shared/Photographer";
import styles from "./Cover.module.scss";

interface CoverProps {
  meta: BLOG.IMeta;
}

export default function Cover({ meta }: CoverProps) {
  const date = meta.date.split("-");
  const month = useMemo(() => {
    try {
      return MONTH[+date[1] - 1];
    } catch (error) {}
  }, []);

  return (
    <div className={styles.top}>
      <div className={styles.coverWrapper}>
        <div
          className={styles.cover}
          style={{
            backgroundImage: `url(${meta.cover})`
          }}
        />
        <div className={styles.coverBg} />
        <div className={styles.dateWrapper}>
          <span className={styles.date}>
            <span className={styles.dateDay}>{date[2] || ""}</span>
            <span className={styles.dateMonth}>{month}</span>
            {new Date().getFullYear() > +date[0] ? (
              <span className={styles.dateMonth}>{date[0]}</span>
            ) : null}
          </span>
          <h1 className={styles.title}>{meta.title}</h1>
        </div>
      </div>
      <Photographer cover={meta.cover} />
    </div>
  );
}
