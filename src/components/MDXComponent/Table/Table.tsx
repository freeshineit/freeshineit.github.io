//
import styles from "./Table.module.scss";
import cls from "classnames";

const Table = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "table-tag";

  const classNames = cls(styles.Table, defaultClassName, className);

  return (
    <section className={styles.tableContainer}>
      <table {...rest} className={classNames} />
    </section>
  );
};

export default Table;
