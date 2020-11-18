//
import styles from "./Sup.module.scss";
import cls from "classnames";

const Sup = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "sup-tag";

  const classNames = cls(styles.P, defaultClassName, className);

  return <sup {...rest} className={classNames} />;
};

export default Sup;
