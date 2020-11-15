import React, { FC } from "react";
import Const from "@constant/index";

interface IFooterProps extends CommponentCommProps {}

const Footer: FC<IFooterProps> = ({ className, style }) => (
  <footer className={className} style={style}>
    <span style={{ marginRight: 20 }}>I'm here </span>
    <a href={Const.github} target="_block">
      ShineShao
    </a>
  </footer>
);

export default Footer;
