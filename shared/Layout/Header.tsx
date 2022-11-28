import React, { FC, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "./nav";
import ShineShao from "@shared/ShineShao";
import styles from "./Layout.module.scss";

interface IHeaderProps extends BLOG.ComponentCommProps {}

type TTheme = "dark" | "light";

interface ITheme extends BLOG.ComponentCommProps {}

const Theme: FC<ITheme> = ({ className }) => {
  // @ts-ignore
  let localTheme: string = null;
  if (typeof window === "object") {
    localTheme = (window as any).localStorage.getItem("theme");
  }
  const [theme, setTheme] = useState<TTheme>(localTheme as TTheme);

  useEffect(() => {
    if (typeof window === "object") {
      const mediaQueryListDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      if (
        mediaQueryListDark.matches &&
        (localTheme === null || localTheme === "dark")
      ) {
        // 系统当前是亮色(dark)主题
        setTheme("dark");
        setHtmlTheme("dark");
      } else {
        setTheme("light");
        setHtmlTheme("light");
      }
    }
  }, []);

  const setHtmlTheme = useCallback((theme: TTheme) => {
    if (typeof window === "object") {
      const html = document.getElementsByTagName("html")[0];
      html.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      return html;
    }
    return null;
  }, []);

  const handleChangeTheme = useCallback(() => {
    const t = theme == "dark" ? "light" : "dark";
    setTheme(t);
    setHtmlTheme(t);
  }, [theme]);

  return (
    <div onClick={handleChangeTheme} className={className}>
      {theme === "light" ? "🌞" : "🌜"}
    </div>
  );
};

const Header: FC<IHeaderProps> = ({ className, style }) => {
  const router = useRouter();

  return (
    <header className={className} style={style}>
      <div className={styles.container}>
        <nav className={styles.left}>
          <ul>
            {Nav.map(n => (
              <li key={n.name}>
                <Link href={n.href}>
                  <a>{n.name}</a>
                </Link>
                {router.pathname === n.href ? (
                  <span className={styles.dot}></span>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.right}>
          <Theme className={styles.Theme} />
          <ShineShao style={{ width: 34, height: 34, borderRadius: "50%" }} />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
