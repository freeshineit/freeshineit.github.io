//
import styles from "./Heading.module.scss";
import cls from "classnames";

const H6 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h6-tag";

  const classNames = cls(styles.H6, defaultClassName, className);

  return <h6 {...rest} className={classNames} />;
};

export default H6;
