//
import styles from "./H3.module.scss";
import cls from "classnames";

const H3 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h3-tag";

  const classNames = cls(styles.H3, defaultClassName, className);

  return <h3 {...rest} className={classNames} />;
};

export default H3;
