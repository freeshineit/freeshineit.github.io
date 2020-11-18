//
import styles from "./Tr.module.scss";
import cls from "classnames";

const Tr = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "tr-tag";

  const classNames = cls(styles.P, defaultClassName, className);

  return <tr {...rest} className={classNames} />;
};

export default Tr;