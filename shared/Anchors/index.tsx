import cls from "classnames";
import Link from "next/link";
import styles from "./Toc.module.scss";

interface TocProps extends BLOG.ComponentCommProps {
  anchors: any[];
}

function Anchors(props: TocProps) {
  const { anchors = [], className, style } = props;
  const classNames = cls("toc-anchors", className, styles.toc);

  return (
    <div className={classNames} style={style}>
      {anchors.map(item => (
        <div>
          <Link href={item.url}>{item.text[1]}</Link>
        </div>
      ))}
    </div>
  );
}

export default Anchors;
