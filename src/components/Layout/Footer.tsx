import React, { FC } from "react";
import Const from "@constant/index";
import { ComponentCommProps } from "src/@types";

interface IFooterProps extends ComponentCommProps {}

const Footer: FC<IFooterProps> = ({ className, style }) => (
  <footer className={className} style={style}>
    <span style={{ marginRight: 20 }}>I'm here </span>
    <a href={Const.github} target="_block">
      ShineShao
    </a>
    <a
      href="https://github.com/freeshineit/freeshineit.github.io/issues"
      target="_blank"
      style={{ marginLeft: 20 }}
    >
      issues
    </a>
  </footer>
);

export default Footer;
