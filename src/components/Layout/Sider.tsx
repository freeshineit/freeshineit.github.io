import React, { FC } from "react";
// import Link from "next/link";

interface ISiderProps extends CommponentCommProps {}

const Sider: FC<ISiderProps> = ({ className, style }) => (
  <aside className={className} style={style}>
    <span>I'm here to stay (Sider)</span>
  </aside>
);

export default Sider;
