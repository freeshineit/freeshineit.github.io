//
import styles from "./H4.module.scss";
import cls from "classnames";

const H4 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h4-tag";

  const classNames = cls(styles.H4, defaultClassName, className);

  return <h4 {...rest} className={classNames} />;
};

export default H4;
