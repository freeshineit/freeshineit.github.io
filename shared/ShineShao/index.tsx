import React, { FC } from "react";
import Const from "@constant/index";

import styles from "./ShineShao.module.scss";

interface IShineShao {
  src?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ShineShao: FC<IShineShao> = ({
  src = "/static/images/ShineShao.jpg",
  className,
  style
}) => {
  const classNames = className
    ? `${styles.ShineShao} ${className}`
    : styles.ShineShao;

  return (
    <a href={Const.github} target="_block">
      <img src={src} alt="ShineShao" className={classNames} style={style} />
    </a>
  );
};

export default React.memo(ShineShao);
