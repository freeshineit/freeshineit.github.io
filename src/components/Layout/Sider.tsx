import React, { FC } from "react";

interface ISiderProps extends BLOG.ComponentCommProps {}

const Sider: FC<ISiderProps> = ({ className, style }) => (
  <aside className={className} style={style}>
    <span>I'm here to stay (Sider)</span>
  </aside>
);

export default Sider;
