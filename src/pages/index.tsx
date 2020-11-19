import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Index.module.scss";
import ShineShao from "@components/ShineShao";
import Const from "@constant/index";

const bgList = [1, 2, 3];

const Index = () => {
  const [bg, setBg] = useState(bgList[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const random = ~~(Math.random() * 3);
      setBg(bgList[random]);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(/static/images/bg/${bg}.jpeg)` }}
    >
      <div className={styles.cover}></div>
      <div className={styles.content}>
        <div className={styles.me}>
          <ShineShao className={styles.face} />
          <h3> I'm ShineShao， FE Developer</h3>
          <div className={styles.links}>
            <Link href="/readme">
              <a>BLOG</a>
            </Link>
            <a target="_block" href={Const.github}>
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Index.displayName = "tsx";
export default Index;
