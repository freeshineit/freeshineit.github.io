//
import styles from "./H1.module.scss";
import cls from "classnames";

const H1 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h1-tag";

  const classNames = cls(styles.H1, defaultClassName, className);

  return <h1 {...rest} className={classNames} />;
};

export default H1;
