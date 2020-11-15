import React, { FC } from "react";
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

  return <img src={src} alt="ShineShao" className={classNames} style={style} />;
};

export default React.memo(ShineShao);
