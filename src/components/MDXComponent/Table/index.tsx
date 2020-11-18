//
import styles from "./Table.module.scss";
import cls from "classnames";

const Table = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "table-tag";

  const classNames = cls(styles.P, defaultClassName, className);

  return <table {...rest} className={classNames} />;
};

export default Table;
