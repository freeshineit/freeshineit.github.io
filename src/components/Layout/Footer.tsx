import React, { FC } from "react";
import Const from "@constant/index";
import { CommponentCommProps } from "src/@types";

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
