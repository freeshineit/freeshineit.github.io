//
import styles from "./List.module.scss";
import cls from "classnames";

const Li = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "li-tag";

  const classNames = cls(styles.Li, defaultClassName, className);

  return <li {...rest} className={classNames} />;
};

export default Li;
