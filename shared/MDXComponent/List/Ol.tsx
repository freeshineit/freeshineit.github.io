//
import styles from "./List.module.scss";
import cls from "classnames";

const Ol = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "ol-tag";

  const classNames = cls(styles.Ol, defaultClassName, className);

  return <ol {...rest} className={classNames} />;
};

export default Ol;
