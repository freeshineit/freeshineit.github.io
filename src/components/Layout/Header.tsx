import React, { FC } from "react";
import Link from "next/link";
import Nav from "./nav";
import ShineShao from "@components/ShineShao";
import styles from "./Layout.module.scss";
import { CommponentCommProps } from "src/@types";

interface IHeaderProps extends CommponentCommProps {}

const Header: FC<IHeaderProps> = ({ className, style }) => (
  <header className={className} style={style}>
    <div className={styles.container}>
      <nav>
        <ul>
          {Nav.map(n => (
            <li key={n.name}>
              <Link href={n.href}>
                <a>{n.name}</a>
              </Link>{" "}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <ShineShao style={{ width: 34, height: 34, borderRadius: "50%" }} />
      </div>
    </div>
  </header>
);

export default Header;
