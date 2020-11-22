import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Nav from "./nav";
import ShineShao from "@components/ShineShao";
import styles from "./Layout.module.scss";
import { CommponentCommProps } from "src/@types";

interface IHeaderProps extends CommponentCommProps {}

type TTheme = "dark" | "light";

interface ITheme extends CommponentCommProps {}

const Theme: FC<ITheme> = ({ className }) => {
  // @ts-ignore
  let localTheme = "light";
  if (typeof window === "object") {
    localTheme = (window as any).localStorage.getItem("theme");
  }
  const [theme, setTheme] = useState<TTheme>(localTheme as TTheme);

  const setHtmlTheme = (theme: TTheme) => {
    if (typeof window === "object") {
      const html = document.getElementsByTagName("html")[0];
      html.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      return html;
    }
    return null;
  };

  useEffect(() => {
    if (typeof window === "object") {
      const mediaQueryListDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      const html = setHtmlTheme(theme);
      if (mediaQueryListDark.matches) {
        // 系统当前是亮色(dark)主题
        setTheme("dark");
        html?.setAttribute("data-theme", "dark");
      }
    }
    return () => {};
  }, []);

  const handleChangeTheme = () => {
    const t = theme == "dark" ? "light" : "dark";
    setTheme(t);
    setHtmlTheme(t);
  };

  return (
    <div onClick={handleChangeTheme} className={className}>
      {theme === "light" ? "🌞" : "🌜"}
    </div>
  );
};

const Header: FC<IHeaderProps> = ({ className, style }) => {
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

export default Header;
