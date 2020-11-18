//
import styles from "./P.module.scss";
import cls from "classnames";

const P = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "p-tag";

  const classNames = cls(styles.P, defaultClassName, className);

  return <p {...rest} className={classNames} />;
};

export default P;
