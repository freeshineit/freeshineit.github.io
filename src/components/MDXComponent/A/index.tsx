//
import cls from "classnames";
import styles from "./A.module.scss";

const A = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "a-tag";
  const classNames = cls(styles.A, defaultClassName, {
    className: !!className
  });
  return <a {...rest} className={classNames} />;
};

export default A;
