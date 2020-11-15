import React, { FC } from "react";
// import Link from "next/link";

interface IFooterProps extends CommponentCommProps {}

const Footer: FC<IFooterProps> = ({ className, style }) => (
  <footer className={className} style={style}>
    <span>I'm here to stay (Footer)</span>
  </footer>
);

export default Footer;
