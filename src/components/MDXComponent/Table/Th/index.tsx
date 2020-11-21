//
import styles from "./Th.module.scss";
import cls from "classnames";

const Tr = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "th-tag";

  const classNames = cls(styles.Th, defaultClassName, className);

  return <th {...rest} className={classNames} />;
};

export default Tr;
