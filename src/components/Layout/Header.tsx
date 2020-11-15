import React, { FC } from "react";
import Link from "next/link";

interface IHeaderProps extends CommponentCommProps {}

const Header: FC<IHeaderProps> = ({ className, style }) => (
  <header className={className} style={style}>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      |
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  </header>
);

export default Header;
