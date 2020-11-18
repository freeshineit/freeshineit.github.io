//
import styles from "./Ul.module.scss";
import cls from "classnames";

const Ul = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "ul-tag";

  const classNames = cls(styles.P, defaultClassName, className);

  return <ul {...rest} className={classNames} />;
};

export default Ul;
