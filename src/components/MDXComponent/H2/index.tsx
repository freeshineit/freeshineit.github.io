//
import styles from "./H2.module.scss";
import cls from "classnames";

const H2 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h2-tag";

  const classNames = cls(styles.H2, defaultClassName, className);

  return <h2 {...rest} className={classNames} />;
};

export default H2;
