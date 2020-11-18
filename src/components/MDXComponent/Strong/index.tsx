//
import styles from "./Strong.module.scss";
import cls from "classnames";

const Strong = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "strong-tag";

  const classNames = cls(styles.P, defaultClassName, className);

  return <strong {...rest} className={classNames} />;
};

export default Strong;
