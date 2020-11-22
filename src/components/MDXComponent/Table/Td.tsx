//
import styles from "./Table.module.scss";
import cls from "classnames";

const Td = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "td-tag";

  const classNames = cls(styles.Td, defaultClassName, className);

  return <td {...rest} className={classNames} />;
};

export default Td;
